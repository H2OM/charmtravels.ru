<?php

namespace app\controllers;

use app\services\CompanyService;

class CompanyController extends Runner
{
    /** @var CompanyService $companyService */
    protected CompanyService $companyService;

    public function __construct()
    {
        $this->companyService = new CompanyService();
    }

    /**
     * Action все блоки 'компании'
     *
     * @return void
     */
    protected function getCompanyInfo() : void
    {
        $response = ["content" => [
            "team" => $this->companyService->get_team(),
            "advantages" => $this->companyService->get_advantages(),
            "pick"=>$this->companyService->get_pick_us(),
            "stages"=>$this->companyService->get_stages(),
            "feedback"=>$this->companyService->get_feedback()
        ]];

        exit(json_encode($response));
    }

    /**
     * Action блока 'отзывы'
     *
     * @return void
     */
    protected function getFedback(): void
    {
        exit(json_encode(["content" => $this->companyService->get_feedback()]));
    }

    /**
     * Action блока 'этапы работы'
     *
     * @return void
     */
    protected function getStages(): void
    {
        exit(json_encode(["content" => $this->companyService->get_stages()]));
    }

    /**
     * Action блока 'почему нас выбирают'
     *
     * @return void
     */
    protected function getPickUs(): void
    {
        exit(json_encode(["content" => $this->companyService->get_pick_us()]));
    }

    /**
     * Action блока 'преимущества'
     *
     * @return void
     */
    protected function getAdvantages(): void
    {
        exit(json_encode(["content" => $this->companyService->get_advantages()]));
    }

    /**
     * Action блок 'команда'
     *
     * @return void
     */
    protected function getTeam(): void
    {
        exit(json_encode(["content" => $this->companyService->get_team()]));
    }
}
