let traffic_light_color;
traffic_light_color = prompt('Колір сигналу світлофора', '');
if (traffic_light_color == 'зелений') {
    alert('Можна йти')
} else if (traffic_light_color == 'жовтий') {
    alert('Приготуватись')
} else if (traffic_light_color == 'червоний') {
    alert('Стоп!')
}