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
                <option value="cup">cup</option>
                <option value="teaspoon">teaspoon</option>
                <option value="tablespoon">tablespoon</option>
                <option value="bunch">bunch</option>
                <option value="dash">dash</option>
                <option value="drop">drop</option>
                <option value="gallon">gallon</option>
                <option value="gram">gram</option>
                <option value="handful">handful</option>
                <option value="liter">liter</option>
                <option value="milliliter">milliliter</option>
                <option value="ounce">ounce</option>
                <option value="packet">packet</option>
                <option value="pinch">pinch</option>
                <option value="pint">pint</option>
                <option value="pound">pound</option>
                <option value="quart">quart</option>
                <option value="splash">splash</option>
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
            qty00: 0, //FIXME: check why qty not decimal
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