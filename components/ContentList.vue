<template>
    <div
        v-for="(item, index) in listT"
        class="tablet:pr-[30px] tablet:py-[30px] desktop:pr-[10.15625vw] desktop:py-[60px]"
        :class="customClass"
        :style="`background-color: ${item.bgColor};`"
    >
        <div class="flex z-[999]">
            <div class="flex flex-col justify-center mr-[10px]">
                <p class="text-[18px] tracking-[1.5px]" :style="`color: ${item.indexTextColor}`">
                    {{ String(index + 1).padStart(2, '0') }}
                </p>
                <div
                    class="ml-[1px] mr-[2px] mt-[4px] rounded-[2.5px] w-[22px] h-[5px] bg-[#603EBE]"
                    :style="`background-color: ${item.indexUnderlineColor};`"
                ></div>
            </div>
            <h2 class="header-2">
                {{ item.title }}
            </h2>
        </div>
        <p class="tablet:text-[18px] desktop:text-[20px] pt-[20px] leading-[28px]" :style="`color: ${item.indexUnderlineColor};`">
            {{ item.message }}
        </p>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        list: {
            type: Array,
            default: [],
        },
        customClass: String,
    },
    computed: {
        listT(): ListData[] {
            return <ListData[]>(<unknown>this.list);
        },
    },
};
</script>

<style scoped>
.header-2 {
    color: #c2c2c2;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.5px;
}
</style>
