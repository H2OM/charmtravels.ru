<?php

namespace app\controllers;

use app\services\CompanyService;
use app\services\MainService;
use app\services\ServicesService;

class MainController extends Runner
{
    /** @var MainService $mainService */
    protected MainService $mainService;

    /** @var ServicesService $servicesService */
    protected ServicesService $servicesService;

    /** @var CompanyService $companyService */
    protected CompanyService $companyService;

    public function __construct()
    {
        $this->mainService = new MainService();
        $this->servicesService = new ServicesService();
        $this->companyService = new CompanyService();

    }

    /**
     * Action все блоки 'главной'
     *
     * @return void
     */
    protected function getMainInfo(): void
    {
        $response = ["content" => [
            "banner" => $this->mainService->get_banner(),
            "hot" => $this->servicesService->get_hot(),
            "prices" => $this->servicesService->get_prices(),
            "reviews" => $this->companyService->get_reviews(),
            "advantages" => $this->companyService->get_advantages()
        ]];

        exit(json_encode($response));
    }

    /**
     * Action блока 'баннер'
     *
     * @return void
     */
    protected function getBanner(): void
    {
        exit(json_encode(["content" => $this->mainService->get_banner()]));
    }

}
