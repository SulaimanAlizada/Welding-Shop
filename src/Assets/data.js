import reservoi01 from './images/reservoir 01.jpg';
import reservoi02 from './images/reservoir 02.jpg';
import reservoi03 from './images/reservoir 03.jpg';
import reservoi04 from './images/reservoir 04.jpg';
import filter01 from './images/filter 01.jpg';
import filter02 from './images/filter 02.jpg';
import filter03 from './images/filter 03.jpg';
import filter04 from './images/filter 04.jpg';
import filter05 from './images/filter 05.jpg';
import stove_01 from './images/stove 01.jpg';
import stove_02 from './images/stove 02.jpg';

var servicesData = [
    {
        id: 1,
        title: 'ساخت ذخیره آب',
        thumbnail: reservoi01,
        imgs: [reservoi01,reservoi02,reservoi03,reservoi04],
        description: 'ساخت هر نوع مخذن آب با سایز ۱۰۰۰ لیتر تا به ۱۰۰۰۰ لیتر',
        features: [
            {name: "سایز", detail: "از ۱۰۰۰ لیتر تا به ۷۰۰۰۰ لیتر ظرفیت آب"},
            {name: "قیمت", detail: "از ۵۰۰۰ تا به ۲ لک افغانی، با جور آمد با مشتری"},
            {name: "مدت زمان ساخت", detail: "از ۳ روز تا به ۱۵ روز نظر به سایز تانکر آب"}
        ]
    },
    {
        id: 2,
        title: 'ساخت آب گرم کن حمام',
        thumbnail: stove_01,
        imgs: [stove_01, stove_02],
        description: '.ساخت آب گرم کن حمام با کیفیت بالا در مدت زمان کم',
        features: [
            {name: "سایز", detail: ""},
            {name: "قیمت", detail: "از ۲۰ هزار تا به ۴۰ هزار"},
            {name: "مدت زمان ساخت", detail: "از ۲ روز تا به یک هفته"}
        ]
    },
    {
        id: 3,
        title: 'ساخت فیلتر آب',
        thumbnail: filter04,
        imgs: [filter01, filter02, filter03, filter04, filter05],
        description: '.ساخت فیلتر آب با کیفیت بالا در مدت زمان کم',
        features: [
            {name: "سایز", detail: ""},
            {name: "قیمت", detail: "از ۴۵ هزار تا به ۹۰ هزار"},
            {name: "مدت زمان ساخت", detail: "۶ روز"}
        ]
    }
];

var socials = [

];

export { servicesData as features, socials };