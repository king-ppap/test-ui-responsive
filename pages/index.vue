<template>
    <div>
        <h1
            class="header-1 mb-[11px] mobile:px-[18px] tablet:pt-[50px] tablet:pl-[37.890625vw]"
        >
            ATHLETS
        </h1>
        <div class="mobile:hidden desktop:hidden">
            <ContentList :list="listATHLETS"></ContentList>
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
    <div>
        <h1
            class="header-1 mobile:mt-[19px] mobile:mb-[23px] mobile:px-[18px] tablet:pl-[37.890625vw]"
        >
            PLAYERS
        </h1>
        <div
            class="tablet:hidden desktop:hidden w-full flex flex-col items-center"
        >
            <div class="relative w-[302px] h-[250px] flex justify-center">
                <AppSvgs
                    class="w-[302px] z-10"
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
                        'Connect with coaches directly, you can ping coaches to view profile.',
                },
                {
                    bgColor: '#F5F4F9',
                    title: 'COLLABORATION',
                    message:
                        'Work with other student athletes to  increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.',
                },
                {
                    bgColor: '#090C35',
                    indexUnderlineColor: '#fff',
                    indexTextColor: '#8765DD',
                    title: 'GROWTH',
                    message:
                        'Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc',
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
