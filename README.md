# Mincular Thermostat
*Fork of [Dark Thermostat](https://github.com/ciotlosm/lovelace-mincular-thermostat-card) by [@ciotlosm](https://www.github.com/ciotlosm)*

Mincular *from minimal & circular* Thermostat is a modern thermostat for home assistant.
It supports the new dynamic themes which allow for a light and a dark mode.

![alt text](https://github.com/ciotlosm/lovelace-mincular-thermostat-card/blob/master/sample.png)

[![GitHub Release][releases-shield]][releases]
![Project Maintenance][maintenance-shield]
[![License][license-shield]](LICENSE.md)

## Options

| Name                 | Type    | Default      | Description                                                                                            |
| -------------------- | ------- | ------------ | ------------------------------------------------------------------------------------------------------ |
| type                 | string  | **Required** | `custom:mincular-thermostat-card`                                                                          |
| entity               | string  | **Required** | The entity id of climate entity. Example: `climate.hvac`                                               |
| name                 | string  | optional     | Card title                                                                                             |
| [hvac](#hvac-object) | object  | optional     | Allows mapping of custom states or using a custom sensor/attribute for state                           |
| step                 | number  | 0.5          | The step to use when increasing or decreasing temperature                                              |
| highlight_tap        | boolean | false        | Show the tap area highlight when changing temperature settings                                         |
| chevron_size         | number  | 50           | Size of chevrons for temperature adjustment                                                            |
| pending              | number  | 3            | Seconds to wait in control mode until state changes are sent back to the server                        |
| idle_zone            | number  | 2            | Degrees of minimum difference between set points when thermostat supports both heating and cooling     |
| ambient_temperature  | string  | optional     | An entity id of a sensor to use as `ambient_temperature` instead of the one provided by the thermostat |
| range_min            | number  | optional     | Override thermostat's minimum value                                                                    |
| range_max            | number  | optional     | Override thermostat's maximum value                                                                    |
| [away](#away-object) | object  | optional     | Allows usage of a custom sensor/attribute for the away detection.                                      |

### hvac object

| Name                     | Type     | Default     | Description                                                                                         |
| ------------------------ | -------- | ----------- | --------------------------------------------------------------------------------------------------- |
| states                   | optional | optional    | A list of states. See examples.                                                                     |
| attribute                | string   | hvac_action | An attribute of the entity to use as state. This cannot be used in conjunction with sensor.         |
| [sensor](#sensor-object) | object   | optional    | The sensor object which monitors the hvac state. This cannot be used in conjunction with attribute. |

### away object

**NOTE:** If the climate entity already provides an attribute `away_mode`, this configuration is wont apply.

| Name                     | Type   | Default     | Description                                 |
| ------------------------ | ------ | ----------- | ------------------------------------------- |
| [sensor](#sensor-object) | object | optional    | A sensor which provides the away state.     |
| attribute                | string | preset_mode | An attribute of the entity to use as state. |

### sensor object

| Name      | Type   | Default      | Description                                           |
| --------- | ------ | ------------ | ----------------------------------------------------- |
| sensor    | string | **Required** | A sensor which provides the hvac state. See examples. |
| attribute | string | state        | An attribute of the sensor to use as state.           |

## Examples

### Simple example

```yaml
- type: custom:mincular-thermostat-card
  title: Bedroom
  entity: climate.ecobee
```

### Example with custom hvac_states

```yaml
- type: custom:mincular-thermostat-card
  title: Bedroom
  entity: climate.hvac
  chevron_size: 100
  hvac:
    states:
      'Off': 'idle'
      'Cooling': 'cooling'
      'Heating': 'heating'
    attribute: operation_mode
```

### Example with custom hvac_sensor

```yaml
- type: custom:mincular-thermostat-card
  title: Bedroom
  entity: climate.nest
  chevron_size: 100
  hvac:
    states:
      'idle': 'idle'
      'cooling': 'cooling'
      'heating': 'heating'
    sensor:
      sensor: sensor.nest_thermostat_hvac_state
```

### Example with external ambient sensor

```yaml
- type: custom:mincular-thermostat-card
  title: Bedroom
  entity: climate.ecobee
  ambient_temperature: sensor.bedroom_temperature
```

### Custom attribute only

```yaml
- type: custom:mincular-thermostat-card
  title: Bedroom
  entity: climate.bedroom
  away:
    attribute: custom_away_mode
```

#### Sensor only

```yaml
- type: custom:mincular-thermostat-card
  title: Bedroom
  entity: climate.bedroom
  away:
    sensor:
      sensor: input_boolean.climate_bedroom_away
```

#### Sensor with attribute

```yaml
- type: custom:mincular-thermostat-card
  title: Bedroom
  entity: climate.bedroom
  away:
    sensor:
      sensor: climate.bedroom
      attribute: away
```

[license-shield]: https://img.shields.io/github/license/CraftyKoala/lovelace-mincular-thermostat.svg?style=flat-square
[maintenance-shield]: https://img.shields.io/maintenance/yes/2022.svg?style=flat-square
[releases-shield]: https://img.shields.io/github/v/release/CraftyKoala/lovelace-mincular-thermostat?style=flat-square
[releases]: https://github.com/CraftyKoala/lovelace-mincular-thermostat/releases
