<?php

namespace app\controllers;

use app\services\FormService;

class FormController extends Runner
{
    /** @var FormService $formService */
    protected FormService $formService;

    public function __construct()
    {
        $this->formService = new FormService();
    }

    /**
     * Action для обработки формы обратной связи
     *
     * @return void
     */
    protected function callback(): void
    {
        exit(json_encode(["content" => [
            "message"=>"Ваше сообщение доставлено"
        ]]));
    }
}
