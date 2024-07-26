<?php

namespace app\controllers;

use app\services\CompanyService;
use app\services\MainService;

class MainController extends Runner
{
    /** @var MainService $mainService */
    protected MainService $mainService;

    public function __construct()
    {
        $this->mainService = new MainService();
    }

    /**
     * Action все блоки 'главной'
     *
     * @return void
     */
    protected function getMainInfo() : void
    {
        $response = ["content" => [
            "banner" => $this->mainService->get_banner(),
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
