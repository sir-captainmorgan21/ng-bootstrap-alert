# NgBootstrapAlert
Provides alert messaging for your application. Message styling is driven by [Bootstrap](https://getbootstrap.com/).

## Table of Contents
* [Demo](#demo)
* [Installation](#installation)
* [Setup](#setup)
* [Configuration](#configuration)
    * [Alert Types](#alert-types)
    * [Aler Position](#alert-position)
* [Usage Examples](#usage-examples)

## Demo
You can clone down this repo to deploy a demo locally.

## Installation
```
npm install ng-bootstrap-alert
```

## Setup
Import ```BootstrapAlertModule``` into your ```app.module```.
```typescript
import { BootstrapAlertModule } from './ng-bootstrap-alert/ng-bootstrap-alert';

@NgModule({
  ...
  imports: [
    BootstrapAlertModule
  ],
})
```
Place the ```bootstrap-alert``` selector at the bottom of your app.component.html
```html
<bootstrap-alert alertPosition="top-left"></bootstrap-alert>
```
Import ```BootstrapAlertService``` and ```BootstrapAlert``` into the component you want to intiate the alert.
```typescript
import { BootstrapAlertService, BootstrapAlert } from './modules/ng-bootstrap-alert/ng-bootstrap-alert';
```

## Configuration
The ```BootstrapAlert``` object offers three exposed configurations.
* message - The message to be presented to the user
* type - The type of message. See purpose of type [here](#alert-types)
* timeoutInMilliseconds - How long the message will be displayed to the user before it fades away. Default timeout is 3000.
### Alert Types
The following message types are avialable. The typess below represent the Bootstrap [alert](https://v4-alpha.getbootstrap.com/components/alerts/) classes.
* alert-success
* alert-info
* alert-warning
* alert-danger
### Alert Position
The following locations are available. Pass the location into the ```bootstrap-alert``` component selector like so:
```html
<bootstrap-alert alertPosition="top-left"></bootstrap-alert>
```
* top-left
* top-center
* top-right
* bottom-left
* bottom-center
* bottom-right

## Usage Examples
### Basic Usage
```typescript
this.bootstrapAlertService.alert(new BootstrapAlert("BootstrapAlert Message!", "alert-success"));
```
### Custom Timeout
```typescript
var alert = new BootstrapAlert("BootstrapAlert Message!", "alert-success");
alert.timeoutInMilliseconds = 1000;
this.bootstrapAlertService.alert(alert);
```