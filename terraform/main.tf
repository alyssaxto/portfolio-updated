provider "azurerm" {
  features {}
  subscription_id = var.subscription_id
}

resource "azurerm_resource_group" "alyportfolio_rg" {
  name     = "RG-alyPortfolio"
  location = "East US"
}

# Managed functions are enabled automatically when you deploy code to the /api folder
resource "azurerm_static_web_app" "web" {
  name                = "swa-alyssa"
  resource_group_name = azurerm_resource_group.alyportfolio_rg.name
  location            = "East US 2" # SWA is only available in specific regions
  sku_tier            = "Standard"  # Standard is required for custom domains/managed functions
  sku_size            = "Standard"

  app_settings = {
    "ADMIN_PASSWORD" = var.admin_password
  }
}

# 5. Variables
variable "admin_password" {
  type      = string
  sensitive = true
}

variable "subscription_id" {
  type      = string
  description = "subid"
}