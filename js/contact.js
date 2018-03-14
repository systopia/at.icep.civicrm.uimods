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

(function ($) {
  $(document).on('ready crmLoad', function () {
    var $contactSummary = $('#contact-summary');
    var $contactForm = $('form#Contact');
    var $emailForm = $('form#Email');
    var $phoneForm = $('form#Phone');
    var $addressForm = $('form.CRM_Contact_Form_Inline_Address');
    var $noteForm = $('form.CRM_Note_Form_Note');

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

    // Hide e-mail form elements.
    $('input.is-bulkmail', $contactForm).closest('td').hide()
    // And the corresponding field label in the table "header".
        .each(function () {
          var colCount = 1;
          $(this).prevAll('td').each(function () {
            if ($(this).attr('colspan')) {
              colCount += +$(this).attr('colspan');
            }
            else {
              colCount++;
            }
          });
          $(this).closest('tr').prevAll('tr').not('[id]').first().find('td:nth-child(' + colCount + ')').hide();
        });
    $('input.is-bulkmail', $emailForm).closest('td').hide()
    // And the corresponding field label in the table "header".
        .each(function () {
          var colCount = 1;
          $(this).prevAll('td').each(function () {
            if ($(this).attr('colspan')) {
              colCount += +$(this).attr('colspan');
            }
            else {
              colCount++;
            }
          });
          $(this).closest('tr').prevAll('tr').not('[id]').first().find('td:nth-child(' + colCount + ')').hide();
        });

    // Hide phone form elements.
    $('select.phone-type-id', $contactForm).closest('td').hide()
    // And the corresponding field label in the table "header".
        .each(function () {
          var colCount = 1;
          $(this).prevAll('td').each(function () {
            if ($(this).attr('colspan')) {
              colCount += +$(this).attr('colspan');
            }
            else {
              colCount++;
            }
          });
          $(this).closest('tr').prevAll('tr').not('[id]').first().find('td:nth-child(' + colCount + ')').hide();
        });
    $('select.phone-type-id', $phoneForm).closest('td').hide()
    // And the corresponding field label in the table "header".
        .each(function () {
          var colCount = 1;
          $(this).prevAll('td').each(function () {
            if ($(this).attr('colspan')) {
              colCount += +$(this).attr('colspan');
            }
            else {
              colCount++;
            }
          });
          $(this).closest('tr').prevAll('tr').not('[id]').first().find('td:nth-child(' + colCount + ')').hide();
        });

    // Hide note form elements.
    $('.is_billing-address-element', $contactForm).hide();
    $('.is_billing-address-element', $addressForm).hide();

    $('input[name="subject"]', $noteForm).closest('tr').hide();
  });

})(cj);
