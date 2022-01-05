<script setup>

import { ErrorMessage, Field, Form } from 'vee-validate';

</script>

<template>

<Form>
    <div class="mb-3">
        <label for="exampleInputName1" class="form-label">Name</label>
        <Field type="text" class="form-control" id="exampleInputName1" name="name"  aria-describedby="name" rules="required|min:2"/>
        <ErrorMessage name="name"/>
    </div>
    <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <Field type="email" class="form-control" id="exampleInputEmail1" name="mail" aria-describedby="emailHelp" rules="required|email"/>
        <ErrorMessage name="mail"/>
    </div>
    <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <Field type="password" class="form-control" id="exampleInputPassword1" name="password" :rules="{regex:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, required: true}" />
        <ErrorMessage name="password"/>
    </div>
    <button type="submit" class="btn btn-primary mb-3">Submit</button>
</Form>

</template>
