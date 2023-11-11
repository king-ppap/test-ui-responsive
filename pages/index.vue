<template>
    <div>
        <h1
            class="header-1 mobile:mt-[20px] mobile:mb-[11px] mobile:px-[18px] tablet:pt-[50px] tablet:pl-[37.890625vw] tablet:pb-[15px] desktop:pt-[100px] desktop:pl-[52.5vw]"
        >
            ATHLETS
        </h1>
        <div class="mobile:hidden">
            <AppSvgs
                :style="`left: calc(0.37890625 * 100vw - 291px)`"
                class="desktop:hidden absolute top-[71px] w-[200px] z-[1]"
                :name="'/assets/svg/footballer-graphic-tablet.svg'"
            />
            <img
                alt="footballer-graphic-desktop"
                class="mobile:hidden tablet:hidden absolute w-[678px] top-[50px] right-[55.57291667vw]"
                src="~/assets/images/footballer-graphic-desktop.png"
            />
            <ContentList
                :list="listATHLETS"
                custom-class="tablet:pl-[37.890625vw] desktop:pl-[52.5vw]"
            ></ContentList>
        </div>
        <div
            class="tablet:hidden desktop:hidden w-full flex flex-col items-center"
        >
            <div class="relative w-[218px] flex justify-center">
                <AppSvgs
                    class="w-[200px] z-10"
                    :name="'/assets/svg/footballer-graphic-mobile.svg'"
                />
            </div>
            <div class="bg-[#F5F4F9] pt-[72px] px-[18px] pb-[30px] mt-[-55px]">
                <Carousel :list="listATHLETS" />
            </div>
        </div>
    </div>
    <div class="tablet:relative desktop:relative">
        <h1
            class="header-1 mobile:mt-[19px] mobile:mb-[23px] mobile:px-[18px] tablet:pl-[30px] tablet:pt-[50px] tablet:pb-[15px] desktop:pt-[100px] desktop:pb-[20px] desktop:pl-[16.71875vw]"
        >
            PLAYERS
        </h1>
        <AppSvgs
            class="mobile:hidden desktop:hidden absolute top-[31px] w-[56.90104167vw] ml-[43.09895833vw] z-[1] overflow-hidden"
            :name="'/assets/svg/basketball-graphic-tablet.svg'"
        />
        <AppSvgs
            class="mobile:hidden tablet:hidden absolute top-[10px] left-[41.875vw] w-[58.125vw] z-[1] overflow-hidden"
            :name="'/assets/svg/basketball-graphic-desktop.svg'"
        />
        <div class="mobile:hidden">
            <ContentList
                :list="listPLAYERS"
                custom-class="tablet:pl-[30px] tablet:pr-[39.84375vw] desktop:pl-[16.71875vw] desktop:pr-[45.88541667vw]"
            ></ContentList>
        </div>
        <div
            class="tablet:hidden desktop:hidden w-full flex flex-col items-center"
        >
            <div class="relative w-[94.375vw] h-[250px] flex justify-center">
                <AppSvgs
                    class="w-[94.375vw] z-10 overflow-hidden"
                    :name="'/assets/svg/basketball-graphic-mobile.svg'"
                />
            </div>
            <div class="bg-[#F5F4F9] pt-[72px] px-[18px] pb-[30px] mt-[-35px]">
                <Carousel :list="listPLAYERS" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    data(vm) {
        const data: {
            listATHLETS: ListData[];
            listPLAYERS: ListData[];
        } = {
            listATHLETS: [
                {
                    bgColor: '#fff',
                    title: 'CONNECTION',
                    message:
                        'Connect with coaches directly, you can ping coaches to view profile.',
                },
                {
                    bgColor: '#F5F4F9',
                    title: 'COLLABORATION',
                    message:
                        'Work with other student athletes to  increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.',
                },
                {
                    bgColor: '#5E3DB3',
                    indexUnderlineColor: '#fff',
                    title: 'GROWTH',
                    message:
                        'Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc',
                },
            ],
            listPLAYERS: [
                {
                    bgColor: '#fff',
                    title: 'CONNECTION',
                    message:
                        'Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.',
                },
                {
                    bgColor: '#F5F4F9',
                    title: 'COLLABORATION',
                    message:
                        'Work with recruiter to increase your chances of findingtalented athlete.',
                },
                {
                    bgColor: '#090C35',
                    indexUnderlineColor: '#fff',
                    indexTextColor: '#8765DD',
                    title: 'GROWTH',
                    message:
                        'Save your time, recruit proper athlets for your team.',
                },
            ],
        };
        return data;
    },
};
</script>

<style>
.header-1 {
    @apply mobile:text-[50px] tablet:text-[90px] desktop:text-[90px] text-[#E7E7E7] truncate;
}

.header-2 {
    @apply mobile:text-[28px] tablet:text-[36px] desktop:text-[36px] text-[#C2C2C2] tracking-[1.5px] truncate;
}
</style>
