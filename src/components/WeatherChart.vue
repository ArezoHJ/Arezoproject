<template>
    <div class="weather-chart">
        <canvas id="weatherChart"></canvas>
    </div>
</template>

<script>
import { onMounted } from 'vue';
import { Chart } from 'chart.js';

export default {
    setup() {
        onMounted(() => {
            const ctx = document.getElementById('weatherChart').getContext('2d');
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                    daatasets: [
                        {
                            label: 'Temperature (°C)',
                            data: [2, 4, 3, 5, 6],
                            borderColor: 'blue',
                            fill: false,
                        },
                    ],
                },
                options: {
                    responsive: true,
                },
            });
        });
    },
};
</script>

<style scoped>
.weather-chart {
    width: 80%;
    margin: auto;
}
</style>