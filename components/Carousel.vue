<template>
    <div ref="carousel">
        <div class="flex">
            <div class="flex flex-col justify-center mr-[10px]">
                <p class="tracking-[1.5px]">
                    {{ String(index + 1).padStart(2, '0') }}
                </p>
                <div class="ml-auto mt-[2px] rounded-[2.5px] w-[17px] h-[4px] bg-[#603EBE]"></div>
            </div>
            <h2 class="header-2">{{ listT[index].title }}</h2>
        </div>
        <p>
            {{ listT[index].message }}
        </p>
        <div class="flex justify-center">
            <svg
                class="mt-[29px]"
                xmlns="http://www.w3.org/2000/svg"
                :width="widthPaginator"
                height="10"
                :viewBox="`0 0 ${widthPaginator} 10`"
                fill="none"
            >
                <circle
                    v-for="(e, i) in listT"
                    :cx="5 + 22 * i"
                    cy="5"
                    r="5"
                    :fill="index === i ? '#5C3CAF' : '#D8D8D8'"
                    @click="() => (index = i)"
                />
            </svg>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    setup() {
        const carousel = ref(null);
        const { isSwiping, direction } = useSwipe(carousel);

        return { carousel, isSwiping, direction };
    },
    props: {
        list: Object,
        isLoop: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        const data: {
            index: number;
        } = {
            index: 0,
        };
        return data;
    },
    computed: {
        listT() {
            return <ListData[]>this.list;
        },
        widthPaginator() {
            return 27 * (this.listT.length - 1);
        },
    },
    watch: {
        isSwiping(v) {
            if (v) {
                if (this.direction === 'left') {
                    if (this.index < this.listT.length - 1) {
                        this.index += 1;
                    } else if (this.isLoop) {
                        this.index = 0;
                    }
                } else if (this.direction === 'right') {
                    if (this.index > 0) {
                        this.index -= 1;
                    } else if (this.isLoop) {
                        this.index = this.listT.length - 1;
                    }
                }
            }
        },
    },
};
</script>

<style scoped>
.header-2 {
    @apply mobile:text-[28px] tablet:text-[36px] desktop:text-[36px] text-[#C2C2C2] tracking-[1.5px];
}
</style>
