<?php

namespace app\controllers;

use app\services\ContactsService;

class ContactsController extends Runner
{
    /** @var ContactsService $contactsService */
    protected ContactsService $contactsService;

    public function __construct()
    {
        $this->contactsService = new ContactsService();
    }

    /**
     * Action получение всех контактов
     *
     * @return void
     */
    protected function getAllContacts(): void
    {
        exit(json_encode(["content" => $this->contactsService->get_all_contacts()]));
    }
}
