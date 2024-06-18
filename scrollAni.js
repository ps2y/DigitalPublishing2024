

document.addEventListener("DOMContentLoaded", startFn);

function startFn()
{
    console.log("Dom contents all loaded!");

    let menu = document.querySelectorAll("#menuList li");
    //console.log(menu);

    let contents = document.querySelectorAll("#container section");
    //console.log(contents);

    let scrollPos = 0;
    let targetScrollPos;
    let nowScrollPos = scrollY; 
    /*옛날 컴들도 작동시킬려면 pageYOffset;*/

    let scrollAni;

    window.addEventListener("scroll", scrollFn);
    function scrollFn()
    {
        nowScrollPos = scrollY;
        scrollPos = nowScrollPos;
    }

    for(let i=0; i<menu.length; i++)
    {
        //메뉴의 i번을 누르면, 펑션 안의 인덱스가 호출된다. 순서에 맞춰서. 라는 뜻의 코딩
        menu[i].addEventListener("click",
            function(){
                let index = this.getAttribute("clickNum");
                //console.log(index);

                targetScrollPos = contents[index].offsetTop;
                console.log(targetScrollPos);

                scrollAni = requestAnimationFrame(moveTo);
            }
        )
    }

    function moveTo()
    {
        scrollPos += (targetScrollPos - nowScrollPos) * 0.2;
        window.scroll(0, scrollPos);

        if(Math.abs(targetScrollPos - nowScrollPos) <= 1)
        {
            window.scroll(0, targetScrollPos);
            cancelAnimationFrame(scrollAni);
        }
        else
        {
            scrollAni = requestAnimationFrame(moveTo);
        }
    }
}