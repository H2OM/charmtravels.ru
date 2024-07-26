<?php

namespace app\controllers;

use app\services\ServicesService;

class ServicesController extends Runner
{
    /** @var ServicesService $servicesService */
    protected ServicesService $servicesService;

    public function __construct()
    {
        $this->servicesService = new ServicesService();
    }

    /**
     * Action для получения всех блоков
     *
     * @return void
     */
    protected function getAllServices(): void
    {
        exit(json_encode(["content" => [
            "cruises" => $this->servicesService->get_cruises(),
            "prices" => $this->servicesService->get_prices(),
            "tours" => $this->servicesService->get_tours(),
            "excursions" => $this->servicesService->get_excursions()
        ]]));
    }

    /**
     * Action блока 'круизы'
     *
     * @return void
     */
    protected function getCruises(): void
    {
        exit(json_encode(["content" => $this->servicesService->get_cruises()]));
    }

    /**
     * Action блока 'цены'
     *
     * @return void
     */
    protected function getPrices(): void
    {
        exit(json_encode(["content" => $this->servicesService->get_prices()]));
    }

    /**
     * Action блока 'туры'
     *
     * @return void
     */
    protected function getTours(): void
    {
        exit(json_encode(["content" => $this->servicesService->get_tours()]));
    }

    /**
     * Action блока 'экскурсии'
     *
     * @return void
     */
    protected function getExcursions(): void
    {
        exit(json_encode(["content" => $this->servicesService->get_excursions()]));
    }

    /**
     * Action блока 'горящие туры'
     *
     * @return void
     */
    protected function getHot() : void
    {
        exit(json_encode(["content"=>$this->servicesService->get_hot()]));
    }
}
