/*-------------------------------------------------------+
| ICEP.at UI modifications                              |
| Copyright (C) 2017 SYSTOPIA                            |
| Author: J. Schuppe (schuppe@systopia.de)                 |
| http://www.systopia.de/                                |
+--------------------------------------------------------+
| This program is released as free software under the    |
| Affero GPL license. You can redistribute it and/or     |
| modify it under the terms of this license which you    |
| can read by viewing the included agpl.txt or online    |
| at www.gnu.org/licenses/agpl.html. Removal of this     |
| copyright header is strictly prohibited without        |
| written permission from the original author(s).        |
+--------------------------------------------------------*/

(function($) {
  $(document).on('ready crmLoad', function() {
    var $contactSummary = $('#contact-summary');
    var $contactForm = $('form#Contact');

    // Hide contact properties on the contact summary.
    $('.crm-contact-nick_name', $contactSummary).closest('.crm-summary-row').hide();
    $('.crm-contact_source', $contactSummary).closest('.crm-summary-row').hide();
    $('.crm-contact-gender_display', $contactSummary).closest('.crm-summary-row').hide();
    $('.crm-contact-legal_name', $contactSummary).closest('.crm-summary-row').hide();
    $('.crm-contact-sic_code', $contactSummary).closest('.crm-summary-row').hide();
    $('.crm-summary-block#contactinfo-block', $contactSummary).hide();

    // Hide contact fields on inline forms on the contact summary.
    $('input[name="nick_name"]', $contactSummary).closest('.crm-summary-row').hide();
    $('input[name="contact_source"]', $contactSummary).closest('.crm-summary-row').hide();
    $('input[name="gender_id"]', $contactSummary).closest('.crm-summary-row').hide();
    $('input[name="legal_name"]', $contactSummary).closest('.crm-summary-row').hide();
    $('input[name="sic_code"]', $contactSummary).closest('.crm-summary-row').hide();

    // Hide contact fields on the contact form.
    $('input[name="nick_name"]', $contactForm).closest('td').hide();
    $('input[name="contact_source"]', $contactForm).closest('td').hide();
    $('input[name="gender_id"]', $contactForm).closest('.form-item').hide();
    $('input[name="legal_name"]', $contactForm).closest('td').hide();
    $('input[name="sic_code"]', $contactForm).closest('td').hide();

    $('input.is-bulkmail', $contactForm).closest('td').hide();
    $('td.is-bulkmail-header', $contactForm).hide();

    $('select.phone-type-id', $contactForm).closest('td').hide();
    $('td.phone-type-header', $contactForm).hide();
  });

})(cj);
