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
                'title' => 'Туры из любой точки<br/>России',
                'text' => 'Путешествия доступны каждому',
                'image'=>'/home/slider/slide1.jpg',
            ],
            [
                'title' => 'Туры из любой точки<br/>России',
                'text' => 'Путешествия доступны каждому',
                'image'=>'/home/slider/slide1.jpg',
            ],
            [
                'title' => 'Туры из любой точки<br/>России',
                'text' => 'Путешествия доступны каждому',
                'image'=>'/home/slider/slide1.jpg',
            ],
        ];
    }
}
