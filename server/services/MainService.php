<?php

namespace app\services;

class MainService
{
    /**
     * Получение блока 'баннер'
     *
     * @return array
     */
    public function get_banner(): array
    {
        return [
            [
                "title" => "",
                "text" => "",
                "image"=>""
            ],
        ];
    }
}
