# Convert KLE raw to QMK info.json

### Input:

<textarea v-model="input"></textarea>
<button class="VPButton medium brand" id="submit" @click="getData()">Convert</button>

### Output:

<textarea v-model="output"></textarea>

<script setup>
import { ref } from 'vue'

const input = ref('')
const output = ref('')

async function getData() {
    const url = 'https://api.qmk.fm/v1/converters/kle';
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({raw: input.value})
        });

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const ret = await response.text();
        output.value = ret;
    } catch (error) {
        console.error(error.message);
    }
}
</script>

<style scoped>
textarea {
    border: 1px solid var(--vp-c-divider);
    border-radius: 4px;
    width: 100%;
    height: 300px;
}

button {
    float: right;

    border-radius: 20px;
    padding: 0 20px;
    line-height: 38px;
    font-size: 14px;

    border-color: var(--vp-button-brand-border);
    color: var(--vp-button-brand-text);
    background-color: var(--vp-button-brand-bg);
}
</style>
