<?php

namespace app\controllers;

use app\services\FaqService;

class FaqController extends Runner
{
    /** @var FaqService $faqService */
    protected FaqService $faqService;

    public function __construct()
    {
        $this->faqService = new FaqService();
    }

    /**
     * Action блока 'часто задаваемы вопросы'
     *
     * @return void
     */
    protected function getFaq(): void
    {
        exit(json_encode(["content" => $this->faqService->get_faq()]));
    }
}
