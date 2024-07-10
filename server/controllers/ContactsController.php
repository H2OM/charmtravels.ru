<?php

namespace app\controllers;

class ContactsController extends Runner
{
    protected function getAllContacts()
    {
        exit(json_encode(["content" => [
            "address" => "Краснодар, проспект Чекистов, 28",
            "instagram" => "https://www.instagram.com/charmtravel.ru?igsh=eDI1c3ZmYzRkNXVp",
            "instagramQR" => "/contacts/a6ee52e4-d38a-4412-b968-633755ffb19e.png",
            "phone" => "+7 (918) 217-06-38",
            "mail" => "charmtravel.krd@gmail.com",
            "WA" => "https://l.clck.bar/526ef",
            "TG" => "https://t.me/yasophya",
            "VK" => "https://vk.com/charmtravel",
            "Anketa"=>"https://forms.gle/B3nf1tf7T4zQjgUcA",
            "other" => [
                [
                    "title"=>"Мы на Яндекс Дзен",
                    "link"=>"https://dzen.ru/charmtravel"
                ],
                [
                    "title"=>"Чаты горящих туров в WhatsApp",
                    "link"=>"https://chat.whatsapp.com/Hg9wPPEoLH9095eOlG3SaE"
                ],
                [
                    "title"=>"Чаты горящих туров в Телеграм",
                    "link"=>"https://t.me/charmtravelhot"
                ],
                [
                    "title"=>"Мы в Федеральном Реестре турагентов: №0036068",
                    "link"=>"https://tourism.gov.ru/agents/subject/1fb7fb5b-77b0-4b12-8762-02b764bdb993/"
                ],
            ]
        ]]));
    }
}