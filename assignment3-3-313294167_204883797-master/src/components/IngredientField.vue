<template>
    <div class="recipes-form__fieldset">
        <div class="recipes-form__qty">
            <div class="css-1juasd6-container">
                <label for="qty00" class="css-amomji">
                <span class="css-znp1na">Qty</span>
                </label>
                <input v-model="qty00" id="qty00" placeholder=" " name="quantity" type="text" class="css-c8bif2" value="">
            </div>
        </div>
        <div class="recipes-form__measure">
            <div class="css-1juasd6-container">
                <label for="measurement00" class="css-1dn068x">
                <span class="css-1j7byy8">Measurement</span>
                </label>
                <select id="measurement00" name="measurement_id" class="css-fv9yoq" v-model="measurement00">
                <option hidden="" disabled=""></option><option value="10"> (none)</option>
                <option value="3">cup</option>
                <option value="21">teaspoon</option>
                <option value="20">tablespoon</option>
                <option value="1">bunch</option>
                <option value="4">dash</option>
                <option value="5">drop</option>
                <option value="6">gallon</option>
                <option value="23">gram</option>
                <option value="7">handful</option>
                <option value="8">liter</option>
                <option value="9">milliliter</option>
                <option value="11">ounce</option>
                <option value="12">packet</option>
                <option value="14">pinch</option>
                <option value="22">pint</option>
                <option value="15">pound</option>
                <option value="16">quart</option>
                <option value="18">splash</option>
                </select>
            </div>
        </div>
        <div class="recipes-form__item">
            <div class="css-1juasd6-container">
                <label for="item00" class="css-amomji">
                <span class="css-znp1na">Item</span>
                </label>
                <input id="item00" placeholder=" " name="item" type="text" class="css-c8bif2" value="" v-model="item00">
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "IngredientField",
    data() {
        return {
            qty00: 0,
            measurement00: "",
            item00: "",
        }
    },
    methods: {
        getBody() {
            return {
                "amount": {
                    "us": {
                        "unit": this.measurement00,
                        "value": this.qty00,
                    }
                },
                "name": this.item00,
            }
        }
    }

}

</script>