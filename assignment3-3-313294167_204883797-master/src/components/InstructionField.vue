<template>
    <div class="css-1juasd6-container">
        <label for="body00" class="css-v23pgw">
            <span class="css-hlp6ko">Step {{stepCount}}: </span>
        </label>
        <textarea v-model="body00" id="body00" name="body" rows="3" class="css-1oh5j1q"></textarea>
    </div>
</template>

<script>
export default {
    name: "InstructionField",
    data() {
        return {
            body00: "",
        }
    },
    props: {
        stepCount: String
    },
    methods: {
        getBody() {
            return {
                "number": this.stepCount,
                "step": this.body00,
            }
        }
    }
}
</script>

<style>

textarea {
    overflow: auto;
    resize: vertical;
    width: 100%;
}

</style>