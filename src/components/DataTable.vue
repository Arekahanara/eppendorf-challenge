<script setup>

import data from '../data.json'

</script>

<template>
    <table class="table">
    <thead>
        <tr>
            <th scope="col">id</th>
            <th scope="col">location</th>
            <th scope="col">type</th>
            <th scope="col">device_health</th>
            <th scope="col">last_used</th>
            <th scope="col">price</th>
            <th scope="col">color</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="item in data" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.location}}</td>
            <td>{{item.type}}</td>
            <td>{{item.device_health}}</td>
            <td>{{item.last_used}}</td>
            <td>{{item.price}}</td>
            <td>{{item.color}}</td>
        </tr>
    </tbody>
    </table>
</template>
