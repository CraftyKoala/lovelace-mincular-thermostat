import { LovelaceCard, LovelaceCardConfig, LovelaceCardEditor } from 'custom-card-helpers';

declare global {
  interface HTMLElementTagNameMap {
    'mincular-thermostat-card-editor': LovelaceCardEditor;
    'hui-error-card': LovelaceCard;
  }
}

// TODO Add your configuration elements here for type-checking
export interface MincularThermostatCardConfig extends LovelaceCardConfig {
  type: string;
  entity: string;
  show_warning?: boolean;
  show_error?: boolean;
  highlight_tap?: boolean;
  name?: string;
  step?: number;
  peding?: number;
  idle_zone?: number;
  range_min?: number;
  range_max?: number;
}
