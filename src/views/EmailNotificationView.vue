<template>
  <div>
    <LayoutHeaderBanner
      :employeeData="employeeData"
    />
    <div class="pb-8 pb-md-11 mt-md-n6">
      <div class="container-md">
        <div class="row">
          <div class="col-12 col-md-3">
            <LeftSidebar
              :header="'Service Progress'"
              :items="services"
              :route="'service-progress'"
              :param="'service_id'"
              :activeItem="$route.params.service_id" />
            <LeftSidebarNeedHelp />
          </div>

          <div class="col-12 col-md-9">
            <EmailNotification
              :emailNotification="emailNotification"
              :serviceTemplate="serviceTemplate"
              :taskPeriod="taskPeriod" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import LeftSidebar from "@/components/common/LeftSidebar.vue";
import LeftSidebarNeedHelp from "@/components/common/LeftSidebarNeedHelp.vue";
import LayoutHeaderBanner from "@/components/common/LayoutHeaderBanner.vue";
import EmailNotification from "@/components/service-process/EmailNotification.vue";

export default {
  name: 'EmailNotificationView',
  components: {EmailNotification, LayoutHeaderBanner, LeftSidebarNeedHelp, LeftSidebar},
  data() {
    return {
      serviceTemplate: 'Preparation for the annual accounts',
      taskPeriod: 2020,
      emailNotification: {
        id: 13,
        subject: 'Preparation for the annual accounts',
        to: 'email@example.com',
        body: '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' +
            '<html xmlns="http://www.w3.org/1999/xhtml" style="min-width: 100%;margin: 0;padding: 0;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;background-color: #dbe5ea;width: 100% !important;">\n' +
            '<head>\n' +
            '    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">\n' +
            '    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">\n' +
            '    <!--[if !mso]><!-->\n' +
            '        <meta http-equiv="X-UA-Compatible" content="IE=edge">\n' +
            '    <!--<![endif]-->\n' +
            '    <title></title>\n' +
            '    <style type="text/css">\n' +
            '    /* Reset */\n' +
            '    table, td, div {\n' +
            '      box-sizing: border-box; }\n' +
            '\n' +
            '    html,\n' +
            '    body {\n' +
            '      width: 100% !important;\n' +
            '      min-width: 100%;\n' +
            '      Margin: 0;\n' +
            '      padding: 0;\n' +
            '      -webkit-text-size-adjust: 100%;\n' +
            '      -ms-text-size-adjust: 100%; }\n' +
            '\n' +
            '    .email_body td, .email_body div, .email_body a, .email_body span {\n' +
            '      line-height: inherit; }\n' +
            '\n' +
            '    a,\n' +
            '    a:visited,\n' +
            '    a span {\n' +
            '      text-decoration: none; }\n' +
            '\n' +
            '    #outlook a {\n' +
            '      padding: 0; }\n' +
            '\n' +
            '    img {\n' +
            '      outline: none;\n' +
            '      border: 0;\n' +
            '      text-decoration: none;\n' +
            '      -ms-interpolation-mode: bicubic;\n' +
            '      clear: both;\n' +
            '      line-height: 100%; }\n' +
            '\n' +
            '    table {\n' +
            '      border-spacing: 0;\n' +
            '      mso-table-lspace: 0pt;\n' +
            '      mso-table-rspace: 0pt; }\n' +
            '\n' +
            '    td {\n' +
            '      vertical-align: top; }\n' +
            '\n' +
            '    /* Grid */\n' +
            '    .email_table,\n' +
            '    .content_section,\n' +
            '    .column,\n' +
            '    .column_cell {\n' +
            '      width: 100%;\n' +
            '      min-width: 100%; }\n' +
            '\n' +
            '    .email_body {\n' +
            '      font-size: 0 !important;\n' +
            '      line-height: 100%;\n' +
            '      text-align: center;\n' +
            '      padding-left: 16px;\n' +
            '      padding-right: 16px; }\n' +
            '\n' +
            '    .email_start {\n' +
            '      padding-top: 32px; }\n' +
            '\n' +
            '    .email_end {\n' +
            '      padding-bottom: 32px; }\n' +
            '\n' +
            '    .email_body,\n' +
            '    html,\n' +
            '    body {\n' +
            '      background-color: #dbe5ea; }\n' +
            '\n' +
            '    .email_container,\n' +
            '    .email_row,\n' +
            '    .col_0,\n' +
            '    .col_1,\n' +
            '    .col_2,\n' +
            '    .col_3,\n' +
            '    .col_4,\n' +
            '    .col_5,\n' +
            '    .col_6,\n' +
            '    .col_2_lg {\n' +
            '      font-size: 0;\n' +
            '      display: inline-block;\n' +
            '      width: 100%;\n' +
            '      min-width: 100%;\n' +
            '      min-width: 0 !important;\n' +
            '      vertical-align: top; }\n' +
            '\n' +
            '    .content_cell {\n' +
            '      width: 100%;\n' +
            '      min-width: 100%;\n' +
            '      min-width: 0 !important; }\n' +
            '\n' +
            '    .column_cell {\n' +
            '      padding-top: 16px;\n' +
            '      padding-bottom: 16px;\n' +
            '      vertical-align: top; }\n' +
            '\n' +
            '    .email_container {\n' +
            '      max-width: 632px;\n' +
            '      Margin: 0 auto;\n' +
            '      text-align: center; }\n' +
            '\n' +
            '    .email_row {\n' +
            '      display: block;\n' +
            '      max-width: 600px !important;\n' +
            '      Margin: 0 auto;\n' +
            '      text-align: center;\n' +
            '      clear: both; }\n' +
            '\n' +
            '    .col_0 {\n' +
            '      max-width: 50px; }\n' +
            '\n' +
            '    .col_1 {\n' +
            '      max-width: 100px; }\n' +
            '\n' +
            '    .col_2 {\n' +
            '      max-width: 200px; }\n' +
            '\n' +
            '    .col_3 {\n' +
            '      max-width: 300px; }\n' +
            '\n' +
            '    .col_4 {\n' +
            '      max-width: 400px; }\n' +
            '\n' +
            '    .col_5 {\n' +
            '      max-width: 500px; }\n' +
            '\n' +
            '    .col_6 {\n' +
            '      max-width: 600px; }\n' +
            '\n' +
            '    .col_2_lg {\n' +
            '      max-width: 400px; }\n' +
            '\n' +
            '    .col_center {\n' +
            '      display: block;\n' +
            '      margin-left: auto;\n' +
            '      margin-right: auto; }\n' +
            '\n' +
            '    .email_body a,\n' +
            '    .email_body a span {\n' +
            '      text-decoration: none;\n' +
            '      color: #37c2ef; }\n' +
            '\n' +
            '    .email_body a.td,\n' +
            '    .email_body a.td span {\n' +
            '      color: #616161; }\n' +
            '\n' +
            '    .column_cell,\n' +
            '    .column_cell td,\n' +
            '    .xlabel_c,\n' +
            '    p {\n' +
            '      font-family: Helvetica, Arial, sans-serif; }\n' +
            '\n' +
            '    .email_body .column_cell,\n' +
            '    .column_cell,\n' +
            '    .min_table td,\n' +
            '    .xlabel_c,\n' +
            '    p {\n' +
            '      font-size: 16px;\n' +
            '      line-height: 23px;\n' +
            '      color: #616161;\n' +
            '      mso-line-height-rule: exactly; }\n' +
            '\n' +
            '    p {\n' +
            '      display: block;\n' +
            '      Margin-top: 0;\n' +
            '      Margin-bottom: 16px; }\n' +
            '      p small {\n' +
            '        font-size: 14px; }\n' +
            '      p.lead {\n' +
            '        font-size: 19px;\n' +
            '        line-height: 27px;\n' +
            '        color: #a7b1b6; }\n' +
            '\n' +
            '    .small {\n' +
            '      font-size: 14px;\n' +
            '      line-height: 20px; }\n' +
            '\n' +
            '    h1, h2, h3, h4, h5, h6 {\n' +
            '      color: #3e484d;\n' +
            '      Margin-left: 0;\n' +
            '      Margin-right: 0;\n' +
            '      Margin-top: 20px;\n' +
            '      Margin-bottom: 8px;\n' +
            '      padding: 0;\n' +
            '      font-weight: bold; }\n' +
            '\n' +
            '    h1 a, h2 a, h3 a, h4 a, h5 a, h6 a,\n' +
            '    h1 a span, h2 a span, h3 a span, h4 a span, h5 a span, h6 a span {\n' +
            '      color: #3e484d; }\n' +
            '\n' +
            '    h1 {\n' +
            '      font-size: 32px;\n' +
            '      line-height: 42px; }\n' +
            '\n' +
            '    h2 {\n' +
            '      font-size: 26px;\n' +
            '      line-height: 36px; }\n' +
            '\n' +
            '    h3 {\n' +
            '      font-size: 23px;\n' +
            '      line-height: 30px; }\n' +
            '\n' +
            '    h4 {\n' +
            '      font-size: 19px;\n' +
            '      line-height: 25px; }\n' +
            '\n' +
            '    h5 {\n' +
            '      font-size: 16px;\n' +
            '      line-height: 21px; }\n' +
            '\n' +
            '    h6 {\n' +
            '      font-size: 13px;\n' +
            '      line-height: 20px; }\n' +
            '\n' +
            '    .footer_c .column_cell,\n' +
            '    .footer_c p {\n' +
            '      color: #a7b1b6; }\n' +
            '\n' +
            '    .footer_c a,\n' +
            '    .footer_c a span {\n' +
            '      color: #a7b1b6;\n' +
            '      text-decoration: underline; }\n' +
            '\n' +
            '    .content_cell,\n' +
            '    .bank_cell {\n' +
            '      width: 100%;\n' +
            '      font-size: 0;\n' +
            '      text-align: center;\n' +
            '      vertical-align: top;\n' +
            '      padding-left: 16px;\n' +
            '      padding-right: 16px; }\n' +
            '\n' +
            '    .content_cell {\n' +
            '      background-color: #ffffff; }\n' +
            '\n' +
            '    .hdr_menu {\n' +
            '      text-align: right; }\n' +
            '      .hdr_menu p {\n' +
            '        line-height: 100%; }\n' +
            '\n' +
            '    .email_body .logo_c {\n' +
            '      line-height: 100%; }\n' +
            '\n' +
            '    .logo_c img {\n' +
            '      max-width: 287.25px;\n' +
            '      height: auto !important; }\n' +
            '\n' +
            '    .email_body .fsocial {\n' +
            '      line-height: 100%;\n' +
            '      color: #a7b1b6; }\n' +
            '\n' +
            '    .fsocial img {\n' +
            '      max-width: 24px;\n' +
            '      height: auto !important; }\n' +
            '\n' +
            '    .ncard_c {\n' +
            '      color: #616161;\n' +
            '      overflow: hidden; }\n' +
            '\n' +
            '    .content_cell .sc,\n' +
            '    .sc td,\n' +
            '    .sc {\n' +
            '      color: #ffffff; }\n' +
            '\n' +
            '    .sc h1,\n' +
            '    .sc h2,\n' +
            '    .sc h3,\n' +
            '    .sc h4,\n' +
            '    .sc h5,\n' +
            '    .sc h6,\n' +
            '    .sc p,\n' +
            '    .sc a,\n' +
            '    .sc a span {\n' +
            '      color: #ffffff; }\n' +
            '\n' +
            '    .hr_rl,\n' +
            '    .hr_ep {\n' +
            '      font-size: 0;\n' +
            '      line-height: 1px;\n' +
            '      mso-line-height-rule: exactly;\n' +
            '      min-height: 1px;\n' +
            '      overflow: hidden;\n' +
            '      height: 2px;\n' +
            '      background-color: transparent !important; }\n' +
            '\n' +
            '    .default_b {\n' +
            '      background-color: #475359; }\n' +
            '\n' +
            '    .active_b {\n' +
            '      background-color: #37c2ef; }\n' +
            '\n' +
            '    .success_b {\n' +
            '      background-color: #32d373; }\n' +
            '\n' +
            '    .danger_b {\n' +
            '      background-color: #d04e53; }\n' +
            '\n' +
            '    .warning_b {\n' +
            '      background-color: #eca552; }\n' +
            '\n' +
            '    .light_b {\n' +
            '      background-color: #f1f6f9; }\n' +
            '\n' +
            '    .imgr {\n' +
            '      clear: both;\n' +
            '      font-size: 0;\n' +
            '      line-height: 100%; }\n' +
            '      .imgr a,\n' +
            '      .imgr a span {\n' +
            '        line-height: 1; }\n' +
            '\n' +
            '    .imgr img {\n' +
            '      width: 100% !important;\n' +
            '      max-width: 568px;\n' +
            '      height: auto !important; }\n' +
            '\n' +
            '    .imgr24 img {\n' +
            '      max-width: 24px; }\n' +
            '\n' +
            '    .imgr44 img {\n' +
            '      max-width: 44px; }\n' +
            '\n' +
            '    .imgr68 img {\n' +
            '      max-width: 68px; }\n' +
            '\n' +
            '    .imgr96 img {\n' +
            '      max-width: 96px; }\n' +
            '\n' +
            '    .imgr168 img {\n' +
            '      max-width: 287.25px; }\n' +
            '\n' +
            '    .imgr268 img {\n' +
            '      max-width: 268px; }\n' +
            '\n' +
            '    .imgr632 img {\n' +
            '      max-width: 632px; }\n' +
            '\n' +
            '    .ebtn,\n' +
            '    .ebtn_xs,\n' +
            '    .ic_h {\n' +
            '      display: table;\n' +
            '      margin-left: auto;\n' +
            '      margin-right: auto; }\n' +
            '\n' +
            '    .ebtn td,\n' +
            '    .ebtn_xs td {\n' +
            '      line-height: 20px;\n' +
            '      mso-line-height-rule: exactly;\n' +
            '      border-radius: 4px;\n' +
            '      text-align: center;\n' +
            '      font-weight: bold; }\n' +
            '      .ebtn td a,\n' +
            '      .ebtn td a span,\n' +
            '      .ebtn_xs td a,\n' +
            '      .ebtn_xs td a span {\n' +
            '        color: #ffffff; }\n' +
            '\n' +
            '    .ebtn td {\n' +
            '      font-size: 17px;\n' +
            '      padding: 13px 22px; }\n' +
            '\n' +
            '    .ebtn_xs td {\n' +
            '      border-radius: 4px;\n' +
            '      font-size: 14px;\n' +
            '      padding: 8px 16px; }\n' +
            '\n' +
            '    .ic_h {\n' +
            '      width: 64px; }\n' +
            '      .ic_h img {\n' +
            '        max-width: 32px;\n' +
            '        width: 32px;\n' +
            '        height: 32px;\n' +
            '        display: block;\n' +
            '        line-height: 100%; }\n' +
            '      .ic_h a {\n' +
            '        line-height: 100%; }\n' +
            '      .ic_h td {\n' +
            '        text-align: center;\n' +
            '        vertical-align: middle;\n' +
            '        line-height: 100%;\n' +
            '        mso-line-height-rule: exactly;\n' +
            '        padding: 16px;\n' +
            '        border-radius: 80px; }\n' +
            '\n' +
            '    .email_summary {\n' +
            '      display: none;\n' +
            '      font-size: 1px;\n' +
            '      line-height: 1px;\n' +
            '      max-height: 0px;\n' +
            '      max-width: 0px;\n' +
            '      opacity: 0;\n' +
            '      overflow: hidden; }\n' +
            '\n' +
            '    p.small {\n' +
            '      display: block; }\n' +
            '\n' +
            '    .brt {\n' +
            '      border-radius: 4px 4px 0 0; }\n' +
            '\n' +
            '    .brb {\n' +
            '      border-radius: 0 0 4px 4px; }\n' +
            '\n' +
            '    .bra {\n' +
            '      border-radius: 4px; }\n' +
            '\n' +
            '    .braf {\n' +
            '      border-radius: 200px; }\n' +
            '\n' +
            '    .brl {\n' +
            '      -webkit-border-radius: 4px 0 0 4px;\n' +
            '      border-radius: 4px 0 0 4px; }\n' +
            '\n' +
            '    .brr {\n' +
            '      -webkit-border-radius: 0 4px 4px 0;\n' +
            '      border-radius: 0 4px 4px 0; }\n' +
            '\n' +
            '    .ncard_c {\n' +
            '      border-radius: 4px; }\n' +
            '\n' +
            '    .tp,\n' +
            '    table .tp {\n' +
            '      color: #37c2ef; }\n' +
            '\n' +
            '    .ts,\n' +
            '    table .ts {\n' +
            '      color: #32d373; }\n' +
            '\n' +
            '    .tde,\n' +
            '    table .tde {\n' +
            '      color: #d04e53; }\n' +
            '\n' +
            '    .tm,\n' +
            '    table .tm,\n' +
            '    a.tm,\n' +
            '    a.tm span {\n' +
            '      color: #a7b1b6; }\n' +
            '\n' +
            '    .td,\n' +
            '    table .td {\n' +
            '      color: #616161; }\n' +
            '\n' +
            '    .tc {\n' +
            '      text-align: center; }\n' +
            '\n' +
            '    .tc .imgr img {\n' +
            '      margin-left: auto;\n' +
            '      margin-right: auto; }\n' +
            '\n' +
            '    .tl {\n' +
            '      text-align: left; }\n' +
            '\n' +
            '    table.tl {\n' +
            '      margin-left: 0;\n' +
            '      margin-right: auto; }\n' +
            '\n' +
            '    .tr {\n' +
            '      text-align: right; }\n' +
            '\n' +
            '    table.tr {\n' +
            '      margin-left: auto;\n' +
            '      margin-right: 0; }\n' +
            '\n' +
            '    .nw,\n' +
            '    table .nw {\n' +
            '      white-space: nowrap; }\n' +
            '\n' +
            '    .py {\n' +
            '      padding-top: 16px;\n' +
            '      padding-bottom: 16px; }\n' +
            '\n' +
            '    .px {\n' +
            '      padding-left: 16px;\n' +
            '      padding-right: 16px; }\n' +
            '\n' +
            '    .pt {\n' +
            '      padding-top: 16px; }\n' +
            '\n' +
            '    .pt_0 {\n' +
            '      padding-top: 0; }\n' +
            '\n' +
            '    .pt_xs {\n' +
            '      padding-top: 8px; }\n' +
            '\n' +
            '    .pte {\n' +
            '      padding-top: 32px; }\n' +
            '\n' +
            '    .pt_card {\n' +
            '      padding-top: 96px; }\n' +
            '\n' +
            '    .pb {\n' +
            '      padding-bottom: 16px; }\n' +
            '\n' +
            '    .pb_0 {\n' +
            '      padding-bottom: 0; }\n' +
            '\n' +
            '    .pb_xs {\n' +
            '      padding-bottom: 8px; }\n' +
            '\n' +
            '    .pbe {\n' +
            '      padding-bottom: 32px; }\n' +
            '\n' +
            '    .xlabel .pl_0,\n' +
            '    .pl_0 {\n' +
            '      padding-left: 0; }\n' +
            '\n' +
            '    .pl {\n' +
            '      padding-left: 16px; }\n' +
            '\n' +
            '    .ple {\n' +
            '      padding-left: 32px; }\n' +
            '\n' +
            '    .xlabel .pr_0,\n' +
            '    .pr_0 {\n' +
            '      padding-right: 0; }\n' +
            '\n' +
            '    .pr {\n' +
            '      padding-right: 16px; }\n' +
            '\n' +
            '    .pre {\n' +
            '      padding-right: 32px; }\n' +
            '\n' +
            '    .pte_lg {\n' +
            '      padding-top: 64px; }\n' +
            '\n' +
            '    .mt_0 {\n' +
            '      margin-top: 0; }\n' +
            '\n' +
            '    .mt_xs {\n' +
            '      margin-top: 8px; }\n' +
            '\n' +
            '    .mt {\n' +
            '      margin-top: 16px; }\n' +
            '\n' +
            '    .mte {\n' +
            '      margin-top: 32px; }\n' +
            '\n' +
            '    .mb_0 {\n' +
            '      margin-bottom: 0; }\n' +
            '\n' +
            '    .mb_xs {\n' +
            '      margin-bottom: 8px; }\n' +
            '\n' +
            '    .mb_xxs {\n' +
            '      margin-bottom: 4px; }\n' +
            '\n' +
            '    .mb {\n' +
            '      margin-bottom: 16px; }\n' +
            '\n' +
            '    .mbe {\n' +
            '      margin-bottom: 32px; }\n' +
            '\n' +
            '    .bt {\n' +
            '      border-top: 1px solid #d7dbe0; }\n' +
            '\n' +
            '    .bb {\n' +
            '      border-bottom: 1px solid #d7dbe0; }\n' +
            '\n' +
            '    .btw,\n' +
            '    .bt.btw,\n' +
            '    .bbw.btw {\n' +
            '      border-color: #ffffff; }\n' +
            '\n' +
            '    .clear {\n' +
            '      content: \' \';\n' +
            '      display: block;\n' +
            '      clear: both;\n' +
            '      height: 1px;\n' +
            '      overflow: hidden;\n' +
            '      font-size: 0; }\n' +
            '\n' +
            '    @media  only screen {\n' +
            '      /* latin */\n' +
            '      @font-face {\n' +
            '        font-family: \'Roboto\';\n' +
            '        font-style: normal;\n' +
            '        font-weight: 400;\n' +
            '        src: local("Roboto"), local("Roboto-Regular"), url(https://fonts.gstatic.com/s/roboto/v15/CWB0XYA8bzo0kSThX0UTuA.woff2) format("woff2");\n' +
            '        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215; }\n' +
            '      /* latin */\n' +
            '      @font-face {\n' +
            '        font-family: \'Roboto\';\n' +
            '        font-style: normal;\n' +
            '        font-weight: 700;\n' +
            '        src: local("Roboto Bold"), local("Roboto-Bold"), url(https://fonts.gstatic.com/s/roboto/v15/d-6IYplOFocCacKzxwXSOFtXRa8TVwTICgirnJhmVJw.woff2) format("woff2");\n' +
            '        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215; }\n' +
            '      .column_cell,\n' +
            '      .column_cell td,\n' +
            '      .xlabel_c,\n' +
            '      p {\n' +
            '        font-family: "Roboto", sans-serif !important;\n' +
            '        font-weight: 400; }\n' +
            '      strong, b, h1, h2, h3, h4, h5 {\n' +
            '        font-weight: 700; }\n' +
            '      a {\n' +
            '        display: inline-block; }\n' +
            '      .ebtn td,\n' +
            '      .ebtn_xs td {\n' +
            '        padding: 0 !important;\n' +
            '        -webkit-transition: box-shadow 0.25s;\n' +
            '        -moz-transition: box-shadow 0.25s;\n' +
            '        -ms-transition: box-shadow 0.25s;\n' +
            '        -o-transition: box-shadow 0.25s;\n' +
            '        transition: box-shadow 0.25s; }\n' +
            '      .ebtn a,\n' +
            '      .ebtn a span,\n' +
            '      .ebtn_xs a,\n' +
            '      .ebtn_xs a span {\n' +
            '        display: block !important;\n' +
            '        text-align: center !important;\n' +
            '        vertical-align: top !important;\n' +
            '        line-height: inherit !important; }\n' +
            '      .ebtn a {\n' +
            '        padding: 10px 22px !important;\n' +
            '        line-height: 26px !important;\n' +
            '        font-weight: 700 !important; }\n' +
            '      .ebtn_xs a {\n' +
            '        padding: 5px 16px !important;\n' +
            '        line-height: 26px !important;\n' +
            '        font-weight: 400 !important; } }\n' +
            '\n' +
            '    @media (max-width: 697px) {\n' +
            '      .email_body.email_start {\n' +
            '        padding-top: 16px !important; }\n' +
            '      .email_body.email_end {\n' +
            '        padding-bottom: 16px !important; }\n' +
            '      .email_holder,\n' +
            '      .email_container,\n' +
            '      .col_1,\n' +
            '      .col_2,\n' +
            '      .col_3,\n' +
            '      .col_4,\n' +
            '      .col_5,\n' +
            '      .col_6,\n' +
            '      .col_2_lg {\n' +
            '        width: 100% !important;\n' +
            '        max-width: none !important; }\n' +
            '      .hdr_menu {\n' +
            '        text-align: left !important;\n' +
            '        padding-top: 12px !important; }\n' +
            '      .hdr_menu .ebtn,\n' +
            '      .hdr_menu .ebtn_xs {\n' +
            '        margin-right: auto !important;\n' +
            '        margin-left: 0 !important; }\n' +
            '      .pte_lg,\n' +
            '      .py.pte_lg {\n' +
            '        padding-top: 32px !important; }\n' +
            '      .pte_xs,\n' +
            '      .py.pte_xs {\n' +
            '        padding-top: 8px !important; }\n' +
            '      .pbe_xs,\n' +
            '      .py.pbe_xs {\n' +
            '        padding-bottom: 8px !important; }\n' +
            '      .ord_cell,\n' +
            '      .invoice_qty,\n' +
            '      .invoice_price {\n' +
            '        text-align: left !important; }\n' +
            '      .ord_cell {\n' +
            '        padding-top: 8px !important; }\n' +
            '      .hide {\n' +
            '        max-height: 0 !important;\n' +
            '        display: none !important;\n' +
            '        mso-hide: all !important;\n' +
            '        overflow: hidden !important;\n' +
            '        font-size: 0 !important; } }\n' +
            '\n' +
            '    @media  only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {\n' +
            '      body {\n' +
            '        min-height: 1024px !important; } }\n' +
            '\n' +
            '    </style>\n' +
            '</head>\n' +
            '<body leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0" style="min-width: 100%;margin: 0;padding: 0;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;background-color: #dbe5ea;width: 100% !important;">\n' +
            '    <!-- header_light -->\n' +
            '    <table class="email_table" width="100%" border="0" cellspacing="0" cellpadding="0" style="box-sizing: border-box;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;width: 100%;min-width: 100%;">\n' +
            '        <tbody>\n' +
            '            <tr>\n' +
            '                <td class="email_body email_start tc" style="box-sizing: border-box;vertical-align: top;line-height: 100%;text-align: center;padding-left: 16px;padding-right: 16px;padding-top: 32px;background-color: #dbe5ea;font-size: 0 !important;">\n' +
            '                    <!--[if (mso)|(IE)]><table width="632" border="0" cellspacing="0" cellpadding="0" align="center" style="vertical-align:top;width:632px;Margin:0 auto;"><tbody><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->\n' +
            '                    <div class="email_container" style="box-sizing: border-box;font-size: 0;display: inline-block;width: 100%;vertical-align: top;max-width: 632px;margin: 0 auto;text-align: center;line-height: inherit;min-width: 0 !important;">\n' +
            '                        <table class="content_section" width="100%" border="0" cellspacing="0" cellpadding="0" style="box-sizing: border-box;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;width: 100%;min-width: 100%;">\n' +
            '                            <tbody>\n' +
            '                                <tr>\n' +
            '                                    <td class="blank_cell header_c pt pb" style="box-sizing: border-box;vertical-align: top;padding-top: 16px;padding-bottom: 16px;line-height: inherit;">\n' +
            '                                        <!-- col-6 -->\n' +
            '                                        <div class="email_row" style="box-sizing: border-box;font-size: 0;display: block;width: 100%;vertical-align: top;margin: 0 auto;text-align: center;clear: both;line-height: inherit;min-width: 0 !important;max-width: 600px !important;">\n' +
            '                                        <!--[if (mso)|(IE)]><table width="600" border="0" cellspacing="0" cellpadding="0" align="center" style="vertical-align:top;width:600px;Margin:0 auto;"><tbody><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->\n' +
            '                                            <div class="col_6" style="box-sizing: border-box;font-size: 0;display: inline-block;width: 100%;vertical-align: top;max-width: 600px;line-height: inherit;min-width: 0 !important;">\n' +
            '                                                <table class="column" width="100%" border="0" cellspacing="0" cellpadding="0" style="box-sizing: border-box;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;width: 100%;min-width: 100%;">\n' +
            '                                                    <tbody>\n' +
            '                                                        <tr>\n' +
            '                                                          \n' +
            '                                                        </tr>\n' +
            '                                                    </tbody>\n' +
            '                                                </table>\n' +
            '                                            </div>\n' +
            '                                        <!--[if (mso)|(IE)]></td></tr></tbody></table><![endif]-->\n' +
            '                                        </div>\n' +
            '                                    </td>\n' +
            '                                </tr>\n' +
            '                            </tbody>\n' +
            '                        </table>\n' +
            '                    </div>\n' +
            '                    <!--[if (mso)|(IE)]></td></tr></tbody></table><![endif]-->\n' +
            '                </td>\n' +
            '            </tr>\n' +
            '        </tbody>\n' +
            '    </table>\n' +
            '    <!-- jumbotron_icon_info -->\n' +
            '    <table class="email_table" width="100%" border="0" cellspacing="0" cellpadding="0" style="box-sizing: border-box;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;width: 100%;min-width: 100%;">\n' +
            '        <tbody>\n' +
            '            <tr>\n' +
            '                <td class="email_body tc" style="box-sizing: border-box;vertical-align: top;line-height: 100%;text-align: center;padding-left: 16px;padding-right: 16px;background-color: #dbe5ea;font-size: 0 !important;">\n' +
            '                    <!--[if (mso)|(IE)]><table width="632" border="0" cellspacing="0" cellpadding="0" align="center" style="vertical-align:top;width:632px;Margin:0 auto;"><tbody><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->\n' +
            '                    <div class="email_container" style="box-sizing: border-box;font-size: 0;display: inline-block;width: 100%;vertical-align: top;max-width: 632px;margin: 0 auto;text-align: center;line-height: inherit;min-width: 0 !important;">\n' +
            '                        <table class="content_section" width="100%" border="0" cellspacing="0" cellpadding="0" style="box-sizing: border-box;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;width: 100%;min-width: 100%;">\n' +
            '                            <tbody>\n' +
            '                                <tr>\n' +
            '                                    <td class="content_cell brt" style="box-sizing: border-box;vertical-align: top;width: 100%;background-color: #ffffff;font-size: 0;text-align: center;padding-left: 16px;padding-right: 16px;border-radius: 4px 4px 0 0;line-height: inherit;min-width: 0 !important;">\n' +
            '                                        <!-- col-6 -->\n' +
            '                                        <div class="email_row" style="box-sizing: border-box;font-size: 0;display: block;width: 100%;vertical-align: top;margin: 0 auto;text-align: center;clear: both;line-height: inherit;min-width: 0 !important;max-width: 600px !important;">\n' +
            '                                        <!--[if (mso)|(IE)]><table width="600" border="0" cellspacing="0" cellpadding="0" align="center" style="vertical-align:top;width:600px;Margin:0 auto 0 0;"><tbody><tr><td width="600" style="width:600px;line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->\n' +
            '                                            <div class="col_6" style="box-sizing: border-box;font-size: 0;display: inline-block;width: 100%;vertical-align: top;max-width: 600px;line-height: inherit;min-width: 0 !important;">\n' +
            '                                                <table class="column" width="100%" border="0" cellspacing="0" cellpadding="0" style="box-sizing: border-box;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;width: 100%;min-width: 100%;">\n' +
            '                                                    <tbody>\n' +
            '                                                        <tr>\n' +
            '                                                            <td class="column_cell px pte tc" style="box-sizing: border-box;vertical-align: top;width: 100%;min-width: 100%;padding-top: 32px;padding-bottom: 16px;font-family: Helvetica, Arial, sans-serif;font-size: 16px;line-height: 23px;color: #616161;mso-line-height-rule: exactly;text-align: center;padding-left: 16px;padding-right: 16px;">\n' +
            '                                                                <table class="ic_h" align="center" width="64" border="0" cellspacing="0" cellpadding="0" style="box-sizing: border-box;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;display: table;margin-left: auto;margin-right: auto;width: 64px;">\n' +
            '                                                                    <tbody>\n' +
            '                                                                        <tr>\n' +
            '                                                                            <td class="active_b" style="box-sizing: border-box;vertical-align: middle;background-color: #37c2ef;line-height: 100%;font-family: Helvetica, Arial, sans-serif;text-align: center;mso-line-height-rule: exactly;padding: 16px;border-radius: 80px;">\n' +
            '                                                                                <p class="imgr mb_0" style="font-family: Helvetica, Arial, sans-serif;font-size: 0;line-height: 100%;color: #616161;mso-line-height-rule: exactly;display: block;margin-top: 0;margin-bottom: 0;clear: both;"><img src="http://tms.test/img/email/android-information.png" width="32" height="32" alt="" style="outline: none;border: 0;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;line-height: 100%;max-width: 32px;width: 100% !important;height: auto !important;display: block;margin-left: auto;margin-right: auto;"></p>\n' +
            '                                                                            </td>\n' +
            '                                                                        </tr>\n' +
            '                                                                    </tbody>\n' +
            '                                                                </table>\n' +
            '                                                                <h1 class="mb_xxs" style="color: #3e484d;margin-left: 0;margin-right: 0;margin-top: 20px;margin-bottom: 4px;padding: 0;font-weight: bold;font-size: 32px;line-height: 42px;">Klargjøring til årsoppgjør</h1>\n' +
            '                                                            </td>\n' +
            '                                                        </tr>\n' +
            '                                                    </tbody>\n' +
            '                                                </table>\n' +
            '                                            </div>\n' +
            '                                        <!--[if (mso)|(IE)]></td></tr></tbody></table><![endif]-->\n' +
            '                                        </div>\n' +
            '                                    </td>\n' +
            '                                </tr>\n' +
            '                            </tbody>\n' +
            '                        </table>\n' +
            '                    </div>\n' +
            '                    <!--[if (mso)|(IE)]></td></tr></tbody></table><![endif]-->\n' +
            '                </td>\n' +
            '            </tr>\n' +
            '        </tbody>\n' +
            '    </table>\n' +
            '    <!-- content -->\n' +
            '    <table class="email_table" width="100%" border="0" cellspacing="0" cellpadding="0" style="box-sizing: border-box;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;width: 100%;min-width: 100%;">\n' +
            '      <tbody>\n' +
            '        <tr>\n' +
            '          <td class="email_body tc" style="box-sizing: border-box;vertical-align: top;line-height: 100%;text-align: center;padding-left: 16px;padding-right: 16px;background-color: #dbe5ea;font-size: 0 !important;">\n' +
            '            <!--[if (mso)|(IE)]><table width="632" border="0" cellspacing="0" cellpadding="0" align="center" style="vertical-align:top;width:632px;Margin:0 auto;"><tbody><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->\n' +
            '            <div class="email_container" style="box-sizing: border-box;font-size: 0;display: inline-block;width: 100%;vertical-align: top;max-width: 632px;margin: 0 auto;text-align: center;line-height: inherit;min-width: 0 !important;">\n' +
            '              <table class="content_section" width="100%" border="0" cellspacing="0" cellpadding="0" style="box-sizing: border-box;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;width: 100%;min-width: 100%;">\n' +
            '                <tbody>\n' +
            '                  <tr>\n' +
            '                    <td class="content_cell" style="box-sizing: border-box;vertical-align: top;width: 100%;background-color: #ffffff;font-size: 0;text-align: center;padding-left: 16px;padding-right: 16px;line-height: inherit;min-width: 0 !important;">\n' +
            '                      <!-- col-6 -->\n' +
            '                      <div class="email_row tl" style="box-sizing: border-box;font-size: 0;display: block;width: 100%;vertical-align: top;margin: 0 auto;text-align: left;clear: both;line-height: inherit;min-width: 0 !important;max-width: 600px !important;">\n' +
            '                      <!--[if (mso)|(IE)]><table width="600" border="0" cellspacing="0" cellpadding="0" align="center" style="vertical-align:top;width:600px;Margin:0 auto 0 0;"><tbody><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->\n' +
            '                        <div class="col_6" style="box-sizing: border-box;font-size: 0;display: inline-block;width: 100%;vertical-align: top;max-width: 600px;line-height: inherit;min-width: 0 !important;">\n' +
            '                          <table class="column" width="100%" border="0" cellspacing="0" cellpadding="0" style="box-sizing: border-box;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;width: 100%;min-width: 100%;">\n' +
            '                            <tbody>\n' +
            '                              <tr>\n' +
            '                                <td class="column_cell px tl" style="box-sizing: border-box;vertical-align: top;width: 100%;min-width: 100%;padding-top: 16px;padding-bottom: 16px;font-family: Helvetica, Arial, sans-serif;font-size: 16px;line-height: 23px;color: #616161;mso-line-height-rule: exactly;text-align: left;padding-left: 16px;padding-right: 16px;">\n' +
            '                                  <p style="font-family: Helvetica, Arial, sans-serif;font-size: 16px;line-height: 23px;color: #616161;mso-line-height-rule: exactly;display: block;margin-top: 0;margin-bottom: 16px;"><p>Hei,</p><p>du f&aring;r denne eposten fordi du har bestilt &aring;rsoppgj&oslash;r  for <strong></strong>. For &aring; kunne hjelpe deg med &aring;rsoppgj&oslash;ret og for &aring; kunne gj&oslash;re det ferdig er vi helt avhengige av at du sender oss alt vi trenger. Fristen for &aring; sende inn til oss er 1. mars. For &aring; se en mer detaljert beskrivelse av hva du m&aring; sende oss, vennligst <a href="https://www.acgr.no/huskeliste-til-arsoppgjor/" style="background-color: rgb(255, 255, 255);" target="_blank">klikk her.</a></p><ol><li>Om du n&aring; har sendt inn alt, klikker du p&aring; knappen under.</li><li>Om du ikke har sendt inn alt er det fint om du sender inn det vi mangler og deretter klikker p&aring; knappen.</li></ol><p><br></p><p></p><p><br></p><p>Har du sp&oslash;rsm&aring;l rundt noe av dette kan du svare tilbake til denne eposten eller kontakte din regnskapsf&oslash;rer p&aring; epost support@acgr.no / telefon 22 55 55 77. <span style="color: rgb(97, 97, 97);">Om du n&aring; velger &aring; ikke gj&oslash;re denne oppgaven kan vi ikke garantere at vi rekker gj&oslash;re v&aring;r del av jobben innen myndighetenes frister.&nbsp;</span>Dette er siste p&aring;minnelse vi sender ut. Eventuelle gebyrer som f&oslash;lger av for sen innsending m&aring; eventuelt dekkes av .</p><p><br></p><p>Vennlig hilsen,</p><p>Accounting Group</p></p>\n' +
            '                                </td>\n' +
            '                              </tr>\n' +
            '                            </tbody>\n' +
            '                          </table>\n' +
            '                        </div>\n' +
            '                      <!--[if (mso)|(IE)]></td></tr></tbody></table><![endif]-->\n' +
            '                      </div>\n' +
            '                    </td>\n' +
            '                  </tr>\n' +
            '                </tbody>\n' +
            '              </table>\n' +
            '            </div>\n' +
            '            <!--[if (mso)|(IE)]></td></tr></tbody></table><![endif]-->\n' +
            '          </td>\n' +
            '        </tr>\n' +
            '      </tbody>\n' +
            '    </table>\n' +
            '    <!-- footer_blank_center -->\n' +
            '    <table class="email_table" width="100%" border="0" cellspacing="0" cellpadding="0" style="box-sizing: border-box;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;width: 100%;min-width: 100%;">\n' +
            '        <tbody>\n' +
            '            <tr>\n' +
            '                <td class="email_body email_end tc" style="box-sizing: border-box;vertical-align: top;line-height: 100%;text-align: center;padding-left: 16px;padding-right: 16px;padding-bottom: 32px;background-color: #dbe5ea;font-size: 0 !important;">\n' +
            '                    <!--[if (mso)|(IE)]><table width="632" border="0" cellspacing="0" cellpadding="0" align="center" style="vertical-align:top;width:632px;Margin:0 auto;"><tbody><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->\n' +
            '                    <div class="email_container" style="box-sizing: border-box;font-size: 0;display: inline-block;width: 100%;vertical-align: top;max-width: 632px;margin: 0 auto;text-align: center;line-height: inherit;min-width: 0 !important;">\n' +
            '                        <table class="content_section" width="100%" border="0" cellspacing="0" cellpadding="0" style="box-sizing: border-box;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;width: 100%;min-width: 100%;">\n' +
            '                            <tbody>\n' +
            '                                <tr>\n' +
            '                                    <td class="content_cell brb pt_xs" style="box-sizing: border-box;vertical-align: top;width: 100%;background-color: #ffffff;font-size: 0;text-align: center;padding-left: 16px;padding-right: 16px;border-radius: 0 0 4px 4px;padding-top: 8px;line-height: inherit;min-width: 0 !important;">&nbsp; </td>\n' +
            '                                </tr>\n' +
            '                                <tr>\n' +
            '                                    <td class="blank_cell footer_c pt pb" style="box-sizing: border-box;vertical-align: top;padding-top: 16px;padding-bottom: 16px;line-height: inherit;">\n' +
            '                                        <!-- col-6 -->\n' +
            '                                        <div class="email_row" style="box-sizing: border-box;font-size: 0;display: block;width: 100%;vertical-align: top;margin: 0 auto;text-align: center;clear: both;line-height: inherit;min-width: 0 !important;max-width: 600px !important;">\n' +
            '                                        <!--[if (mso)|(IE)]><table width="600" border="0" cellspacing="0" cellpadding="0" align="center" style="vertical-align:top;width:600px;Margin:0 auto;"><tbody><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->\n' +
            '                                            <div class="col_6" style="box-sizing: border-box;font-size: 0;display: inline-block;width: 100%;vertical-align: top;max-width: 600px;line-height: inherit;min-width: 0 !important;">\n' +
            '                                                <table class="column" width="100%" border="0" cellspacing="0" cellpadding="0" style="box-sizing: border-box;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;width: 100%;min-width: 100%;">\n' +
            '                                                    <tbody>\n' +
            '                                                        <tr>\n' +
            '                                                            <td class="column_cell px pt_xs pb_0 tc" style="box-sizing: border-box;vertical-align: top;width: 100%;min-width: 100%;padding-top: 8px;padding-bottom: 0;font-family: Helvetica, Arial, sans-serif;font-size: 16px;line-height: 23px;color: #a7b1b6;mso-line-height-rule: exactly;text-align: center;padding-left: 16px;padding-right: 16px;">\n' +
            '                                                                <p class="small mb_xxs" style="font-family: Helvetica, Arial, sans-serif;font-size: 14px;line-height: 20px;color: #a7b1b6;mso-line-height-rule: exactly;display: block;margin-top: 0;margin-bottom: 4px;">\n' +
            '                                                                    Mior LLC<br>\n' +
            '                                                                    AK000000MVA\n' +
            '                                                                </p>\n' +
            '                                                                <p class="small mb_xxs" style="font-family: Helvetica, Arial, sans-serif;font-size: 14px;line-height: 20px;color: #a7b1b6;mso-line-height-rule: exactly;display: block;margin-top: 0;margin-bottom: 4px;"><p><strong>FOOTER</strong></p><p>Interesting</p><p><strong><em>great</em></strong></p></p>\n' +
            '                                                            </td>\n' +
            '                                                        </tr>\n' +
            '                                                    </tbody>\n' +
            '                                                </table>\n' +
            '                                            </div>\n' +
            '                                        <!--[if (mso)|(IE)]></td></tr></tbody></table><![endif]-->\n' +
            '                                        </div>\n' +
            '                                    </td>\n' +
            '                                </tr>\n' +
            '                            </tbody>\n' +
            '                        </table>\n' +
            '                    </div>\n' +
            '                    <!--[if (mso)|(IE)]></td></tr></tbody></table><![endif]-->\n' +
            '                </td>\n' +
            '            </tr>\n' +
            '        </tbody>\n' +
            '    </table>\n' +
            '</body>\n' +
            '</html>\n',
        created_at: '2022-02-03 12:12',
      },
    }
  },
  computed: {
    employeeData() {
      return this.$store.state.employeeData;
    },
    services() {
      return this.$store.state.services
    }
  },
}

</script>
