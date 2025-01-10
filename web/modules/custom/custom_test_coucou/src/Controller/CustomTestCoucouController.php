<?php

namespace Drupal\custom_test_coucou\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Contrôleur pour le module custom_test_coucou.
 */
class CustomTestCoucouController extends ControllerBase {

  /**
   * Retourne une page avec le message "Coucou ceci est un test".
   *
   * @return array
   *   Un rendu pour une page de contenu.
   */
  public function displayMessage() {
    return [
      '#markup' => $this->t('Coucou ceci est un test.'),
    ];
  }
}
