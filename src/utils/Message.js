import getDomByComp from "./getDomByComp";
import Icon from '@/components/Icon'
import style from './style.module.less'

export default function (option = {}) {
    const message = option.message || "无消息"
    const type = option.type || "info";
    const duration = option.duration || 2000;
    const container = option.container || document.body;



    const div = document.createElement('div');
    const iconDom = getDomByComp(Icon, {
        type
    });
    div.innerHTML = `<span class=${style.icon}>${iconDom.outerHTML}</span>  <span class=${style.message}>${message}</span>`;

    div.className = `${style['message-container']}  ${style['message-container'+'-'+type]} `


    if (getComputedStyle(container).position === "static") {
        container.style.position = 'relative'
    }
    container.append(div);

    div.style.transform = 'translate(-50%,-50%) translate(5px,20px)'
    div.style.opacity = '0';


    div.offsetWidth;

    div.style.transform = 'translate(-50%,-50%) ';
    div.style.opacity = '1';

    setTimeout(() => {
        div.style.transform = 'translate(-50%,-50%) translate(-5px,-10px)';
        div.style.opacity = '0';
        div.addEventListener('transitionend', () => {
            div.remove();
            option.callBack && option.callBack()
        }, {
            once: true
        })

    }, duration)


}