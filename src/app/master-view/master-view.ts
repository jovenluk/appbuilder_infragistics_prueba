import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { defineComponents, IgcButtonComponent, IgcCardComponent, IgcIconButtonComponent, IgcIconComponent, IgcRippleComponent } from 'igniteui-webcomponents';
import '@infragistics/igniteui-webcomponents-grids/grids/combined.js';
import NorthwindService from '../service/Northwind-service';

defineComponents(IgcCardComponent, IgcButtonComponent, IgcRippleComponent, IgcIconButtonComponent, IgcIconComponent);

@customElement('app-master-view')
export default class MasterView extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .group {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .row-layout {
      display: flex;
    }
    .group_1 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .card {
      position: relative;
      width: 1439px;
      height: max-content;
      min-width: 320px;
    }
    .card_1 {
      width: 1438px;
      height: max-content;
      min-width: 320px;
    }
    .body-content {
      min-width: 50px;
      min-height: 50px;
    }
    .actions-content {
      min-width: 50px;
      min-height: 40px;
    }
    .button {
      height: max-content;
      min-width: min-content;
    }
    .grid {
      min-width: 600px;
      min-height: 300px;
      flex-grow: 1;
      flex-basis: 0;
    }
  `;

  constructor() {
    super();
    this.northwindEmployees = this.northwindService.getData('Employees');
  }

  private northwindService: NorthwindService = new NorthwindService();

  @property()
  private northwindEmployees?: any[];

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <link rel='stylesheet' href='node_modules/@infragistics/igniteui-webcomponents-grids/grids/themes/light/material.css'>
      <div class="column-layout group">
        <div class="row-layout group_1"></div>
        <igc-card class="card">
          <igc-card-header>
            <h3 slot="title">
              Facturacion
            </h3>
            <h5 slot="subtitle">
              Mensual
            </h5>
          </igc-card-header>
          <igc-card-content class="body-content"></igc-card-content>
          <igc-card-actions class="actions-content">
            <igc-button variant="flat" class="button">
              Button
              <igc-ripple></igc-ripple>
            </igc-button>
            <igc-icon-button variant="flat">
              <span class="material-icons">
                favorite
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
            <igc-icon-button variant="flat">
              <span class="material-icons">
                bookmark
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
            <igc-icon-button variant="flat">
              <span class="material-icons">
                share
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
          </igc-card-actions>
        </igc-card>
        <div class="row-layout group_1"></div>
        <igc-card class="card_1">
          <igc-card-header>
            <h3 slot="title">
              Title goes here...
            </h3>
            <h5 slot="subtitle">
              Subtitle goes here...
            </h5>
          </igc-card-header>
          <igc-card-content class="body-content"></igc-card-content>
          <igc-card-actions class="actions-content">
            <igc-button variant="flat" class="button">
              Button
              <igc-ripple></igc-ripple>
            </igc-button>
            <igc-icon-button variant="flat">
              <span class="material-icons">
                favorite
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
            <igc-icon-button variant="flat">
              <span class="material-icons">
                bookmark
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
            <igc-icon-button variant="flat">
              <span class="material-icons">
                share
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
          </igc-card-actions>
        </igc-card>
        <igc-grid .data="${this.northwindEmployees}" primary-key="employeeID" display-density="cosy" allow-filtering="true" filter-mode="excelStyleFilter" auto-generate="false" class="ig-typography grid">
          <igc-column field="lastName" data-type="string" header="lastName" sortable="true" selectable="false"></igc-column>
          <igc-column field="firstName" data-type="string" header="firstName" sortable="true" selectable="false"></igc-column>
          <igc-column field="title" data-type="string" header="title" sortable="true" selectable="false"></igc-column>
          <igc-column field="employeeID" data-type="number" header="employeeID" sortable="true" selectable="false"></igc-column>
          <igc-column field="titleOfCourtesy" data-type="string" header="titleOfCourtesy" sortable="true" selectable="false"></igc-column>
          <igc-column field="birthDate" data-type="date" header="birthDate" sortable="true" selectable="false"></igc-column>
          <igc-column field="hireDate" data-type="date" header="hireDate" sortable="true" selectable="false"></igc-column>
          <igc-column field="address.street" data-type="string" header="address street" sortable="true" selectable="false"></igc-column>
          <igc-column field="address.city" data-type="string" header="address city" sortable="true" selectable="false"></igc-column>
          <igc-column field="address.region" data-type="string" header="address region" sortable="true" selectable="false"></igc-column>
          <igc-column field="address.postalCode" data-type="string" header="address postalCode" sortable="true" selectable="false"></igc-column>
          <igc-column field="address.country" data-type="string" header="address country" sortable="true" selectable="false"></igc-column>
          <igc-column field="address.phone" data-type="string" header="address phone" sortable="true" selectable="false"></igc-column>
          <igc-column field="managerID" data-type="number" header="managerID" sortable="true" selectable="false"></igc-column>
          <igc-column field="notes" data-type="string" header="notes" sortable="true" selectable="false"></igc-column>
          <igc-column field="avatarUrl" data-type="string" header="avatarUrl" sortable="true" selectable="false"></igc-column>
        </igc-grid>
      </div>
    `;
  }
}
