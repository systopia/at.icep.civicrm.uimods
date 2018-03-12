<?php
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

/**
 * Class CRM_Uimods_Contact
 */
class CRM_Uimods_Contact {

  /**
   * Perform actions on hook_civicrm_pageRun() on the
   * CRM_Contact_Page_View_Summary page.
   *
   * @param $page
   */
  public static function pageRun(&$page) {
    $script = file_get_contents(__DIR__ . '/../../js/contact.js');
    CRM_Core_Region::instance('page-body')->add(array(
      'script' => $script
    ));
  }

  public static function buildForm($formName, &$form) {
    $script = file_get_contents(__DIR__ . '/../../js/contact.js');
    CRM_Core_Region::instance('page-body')->add(array(
      'script' => $script
    ));
  }

}
