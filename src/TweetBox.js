
import { Avatar, Button } from '@material-ui/core'
import React, { useState } from 'react'
import './TweetBox.css'
import db from './firebase'

function TweetBox() {
const [tweetMessage, setTweetMessage]=useState("");
const [tweetImage, setTweetImage]=useState("");

const sendTweet=e=>{
    e.preventDefault();

    db.collection('posts').add({
        displayName: "Prerna Mishra",
        username:"iam_prerna",
        verified: true,
        text: tweetMessage,
        image: tweetImage,
        avatar:"https://api.time.com/wp-content/uploads/2020/09/time-100-Selena-Gomez.jpg?w=824&quality=70"
    });
    setTweetMessage("");
    setTweetImage("");
};
    return (
        <div className = "tweetBox">
          <form>
                <div className = "tweetBox__input">
                    { <Avatar
                        src = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFhYZGBgaGRoZHBoYHBgcGhwcGBkcGhwaHBgcIS4lHB4rHxoaJjgmKy8xNTU1HCQ7QDs0Py40NTEBDAwMEA8QHxISHjQrJCU0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIARMAtwMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAgMEBQYHAQj/xAA+EAABAwEFBAgEAwcEAwAAAAABAAIRAwQSITFBBQZRYSJxgZGhscHwBxMy0UJS4RQjYnKSovEzgrLCFSRj/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAIxEAAgICAgICAwEAAAAAAAAAAAECESExAxJBUTJxBCJhE//aAAwDAQACEQMRAD8AlqDzdHUlg66m9JvBOXNJREJPZtQZHVdtdItM6JhQcRkpCs+8wE5pGOhBmakLDVgwo+kE5otlwRMyZBRwiUskZ5ShDFclBhRljHUnqoLaW91ks77lWqGnqccs8gVBWj4pWFpN35r41a3A9RJCNWYvjUHKgUPixYj9TKzOZa0/8SVN7O34sFYgMtDGk5CpLD2XgJQpmLM1cRWODhIMhGKxjrEYrjAjapgBRK6UZEqLGOjELkFBhR1jHGoLjkFjFNs72XYIxRXkaJqx7SM0jVc8Y6JmhUyQpnFSdmZfBCg7FaA7A5qbsDockoawr2FuCNZSbwlPn0gXglGr2bG8EDDpqDimry4QRkqB8Sd8jTb+zWdxbUeOm4ZtadGnRx45jxW2EW3x+JDbO51CzAPqtN1z3YsadQAPrcO4LNtob22usTftFQ8gboHUGwAocsjDIa8UhezTpAbFq9oLvqJceZlIfMCAxQDUQBgUFwBHBWMTe729VqsZHyanQ1pulzDOfR/CeYhbPudvzQtnQP7ut+R34uJYfxea8+EQlaTy0hzSQ4YggkEHiCMQVqsJ6rcjNas6+G++/wC0xZrQR85o6D8vmNGh/jHjnxWipTAJRF2F2FjBUZpXVyFgnSEFxpXVgGfMAyMJzLcsFTLNtOo/62kc1IWe0ukSU6jaE7ZLLZrM0TgpPZ1LCdQoijULgLqUo1qjHZyEtDWi0sbK7UqAYEphZLYXDJCtZnvxKXQ2wu3tsMs1mqVnGQxuA4uJho7SQF50ttrdUe+q8y57i49Z0HADIcgr58VNpFpZZpwH7x/XiGDzPcsye6UYoDHkyPfuE2u4pSjW0R2sLnYI6ANS4ozCp2z7Bc/76Ilq3dqNxAkcknePsp/lKrohnNKMx+hStSi9uYOHFInFOmTaaDldC4wroRMLWes5jmvY4te0ggtwIIyIXofcneIW2zNeYFRvQqNGjhrHAiCOtedRgVbvh1tw2a1saXEU6sMeNJJ6Dux2H+5BoKN+C6SuMdIQQCdBQQhALGOBBBBYxlWz2B7cYhEr2a6cCq9St1Rjw0TdVosT2uGKopEasmdi0y5sZKTdZ9FFWOrH0nBS7bSLsqct2Ujo7ZagZgVLUawIzUdZ2Nfrio7ex5s9lrVGuiGOjrIgeJQYyMQ3u2n+02qrVmWlxDf5W4N+/aoNGqZwiptCitFklW3d/YZeQ5whvPVNN1NnB7r7hIHmtEsdGQIC5eblafVHbwcKrtIVs1iYwZDuC7XpAjTuTt1MjRJ3VzRydBX9obIY7QKo7V2IGyRnyC011MqJ2ps8uEgK8ZNaElCMtmVupkGDmPFcuqa2tYnNN6MVFlsjBdUJdkcPJBxdBLuCOx2GcEa8Oa6GweRw7/fggBB8FSiZ6N3T2kLTZaVWcXMF6NHt6Lx/UD3qZWZ/By39CrZycWuvtHJwDXR2tntWnQptZGOSguwgQiYGCC5dQWMY8wU3gPEZJegWtCjrHZmsIg56KVFikYKixsjsf2KAM1LWdzTmq3Rsr70TgrNsyiIunNJIdD2wXWulVb4u7Ru2RlNp/wBSoAf5WAv8wFbW2RoxlZX8W63TosnJr3dpICVbHM4JxQAkwEvQsxc1xBAugug5kDOE63foh9opNOV4Hux9EW6TfoKi21/S+2GzmjRYxjbzyMv4jmSdAELTsusBfdaXNfnDcGjlninu0LV8tt4DTQKmWzbr3mSSRMZ3WDkTnwXDx3J2j0eTrFKybp7zWqg67UiqzjkY6/urNsnb1GuIabrtWuwPYciqNQY8sFR7XNaXFoJgtJaYLSc2u64lSexLO01mkCMdOapNdVlCcf7aeC+OqiFXtrb00qMta0vfwGU9al9qtuUyeSzC2m7LhmTmm40pKxORtaO7X2lVrOm61gOihWlzTDutO6YfUIaxjnnr4CTrgo6uXB0OBBGhzCvFV4OWbT85HoEjDr99vmu1dDxj7JGzVccfYOacPbgRwJVEyVFt+GVsuW9gOAqMeztiez6VuzV5r3etNy00H/lqMJ/lcYPqvSbHSBzCWWxlo6EFxdKATiC4ghZjIdlWX5kO0UtarM5glpUfsOoGNuKbaZzVJNkoq0NbI8nPNS1A5EJmGAJ3Z2qbZREpaGuLAQsc+KlWbSxv5aY/ucfstpstSBDgsU+K7v8A33AZCnTHmfVZbCynUhOCmd1acWlk6Xj4FQlJ0EHgQrfs6gGvY9o6JcIPJzTh4pOWVRr2W4YXK/TLz+zNe2CJUHtDdrowGXmzMcDxzB8VN7Mq4KwdEtC8+MpReD0ZxT2ihWWwVQwUAxwZN66bt0mZkzJPapzZ2yhTaMMZGWmM4KYqwwSSESkb7gAm5OSUlTFjCMcoa7yf6cclUHbMD2NdGLcdInQnirZvC4hsKM2XUkEK3FJqJKcU2VOnsv5Tw9rDeExem7J1w+6gbfZnOc5xGK1gUAJwVX3ksg+oDrVlyPRGXCtlCa6OxPabspyOBTKrg4hOKJwVrOavA4YIA44juXpTYlq+bZ6VT89Nj/6mgnxK82My7Vvfw6r37BSx+m8z+lxjwIRkKtFmlGREcJAnA1BGCCwDIrNZXAgqw2emTomNmrQIIT+jaYIIVJNsWKSDOBnJOKeC4+qHGYR3MiFNspRI2ao6BIkLFPig6bfU5NYP7GnzW3WO0NiNViXxQj/yFTqZ/wAAtHZnopgV03UJdQqAnotM4nUQ4QPDu4qlp7Z7Y9rSGkgF0kY8uHUFuWPaNDcM+krZqVhdACkxbLozUPs6oHMDhqAUnbXOiAvN8nsKVxFq9sfUfdEnyRau0LQx4hguDMg9LrA1CLYLXTptLnu5czHJEtW32HABNlvQqTaI7aW3aj8AL/KQPEpXZtqJIcGluGI5prVtdEmbsHOQnVG2MLeiR6rojXXRzzjKLtk5Rt+GKits1A5pCbNrGcElaiYxRXoVyVFEtgh5XaL9V23fWes+aTYYMLo8HCnkkafDtW0/CKtNkew/hqmOpzW+oKxGi7I8PutU+EtuDBaA4wIY4ycBdvg+fgsnYWtmpkYo4TWwW1lZgewy0pw4raF2Bz0FxrUEDFAuSMEmGkJexvAYiVnwCeAlO2KkOKD9FKMYHNVQ/wDJAOxeAeYS43gOV9scmqDmi642WEDpYaLIPiNUvW6oeTB3MDfRXh28EfjH9KzXeS0mpaHvJmTn4poSTYsotKyEcMUdo6JXXjBBh6JHJVJl93Rtt6i0at6J7MvCFOvaCFRd1qpa13809hH6K5WSuHgQV53NGpuj1eCXaCshdp7BLpe15aZJOreOSNsWwU2uJtDWPziQ+DOAEiYjPFWh1KWkKtW+yvYTcBjh9ijDllod8fG1+1r6Y32hYqMOuMh14kFrnEROAF5oGShaFkqudAcBjpJw+6kvkVXYOBaO1Slhs1zRdHZvaRGcYLEW39i1ko3GgOzA8VH7RriCnVutMaqp7Yt+BaDic+QRjG2Q5JKKoiKrrzieaM9uAKJR4JVmRHAq5yB7O/JXjcix/Pc+iXENcBeAJF4YmJGmCojM4V43ArEVw0ZugdQx9DCVbHfxNd2TZBRaGswaMACSZCl/2hvBM2AAQuFZ5JrA8/ahwQTMri1jFJ2baQ5t0pa2ghjo4FQ9novBkKTrPJpun8p8k0xYZK/Uc2+S4A5Zp42hTOIa3lgoe0Pk9ykjaWUqTHEXnuiGjEnGMuC5GrOy6A+zs/I3uCoG2mgVXxxOWStlv2xdwLWM6yC4dYGXvBVC3uvOvTMp+OLixJyUlQye3oyit1S7Wyx3X9k3Zn2K6Ismt1ndN7Tq0eBU3Vc+k683EKr7GrXKzTxkHtV8cwOGXYuTnxK/Z3fjftCvQ42ZtprxBzGhT99tEaKqWnZ8G8zDlwTF9So3CSpRim7RaUnHaLlVtbQMSJULbNogZKGNZ5zKbVgSYldEYVs5p8t6CW+3lxMKDrZqTrMhR1UYq8Tlk2wWZsuR6JxPMnxRrMIa53I+X3SdnRsVINkVObHqPbUY+m+4/MEY5AZqFqjzUrsk9NnDEd4A9VkrYW6RqWxN83A/KtDDfAkOYJvACfozvch2DhYrDt+z1nXGVBfIm44OY/8AoeASso2xUILXgw4CQdQZkEHiMCrXulT+YWWh4L3fgGgc4QSB2kcsU7jWCalZf0ErTpGJdAQS9GbsimXRCiNq7QaxjgTJIIAAxKe1q5AujNHbu+6ox0Nl7hBe7ADkDw6krHjhmfWutUccBcHPNTuyty7RWYHPe5jXRi4kT2DHqV52PunRouY55D3iTLh0QcIIb35q0WmA3Dq78FJIpKXozRm4VmYXfMc8hueMNymZGPPNZ3tumwVHXB0A6G55duPFabvptn5FKoy9JiDxMtbdbnnnJ4daywuljXHN0z13nT4yiruw+BtT+lw4ub4z+ibRBTto6J4y3zTeqMffFOmJJHG4EHhirvsi232DiqVdx61K7MqFpEGFPnj2iV4JdZFwfDhio+12c6GRwXW13Ri3tGKRq2k8FyxTTO6bTRHPBagylqc0sWyZhcqZLqTOKUSNtcBQrjJPcpW2STAxJwARGWQMF52mJ5ngqrCItW6EbV0WtaOGKbNMEDgu1KhJvHNEYMUUsCt5Fqh05qSsA6bOEGe2BKi3eqkrM6HtHFh9D6Jo7BLyTNqBdM5Bo7oWo7mWcMoMJxLabe8tE+N5Z/sezX6VR3Bt0dchoWp7Do3aUAYYdwaE/kn4JCiS4yewIJamyAgiAiNlbuNADqvSdnd0B58VPfLEQ0ZDARh2JVoRSVEsR9rs17FuBE4ekdRKaVto3GOL/wAAJOWEDUZ6FSVuZdF8dvVqsq+KG1TSApsf0qg6XJoAE98j/CVoKZRN7dsm013EGWAm7zP5veiRo04ptnSfOfVIbKsBfUa05RePUBP2Vo29sn5TQQSZJJkDDG6MUJUkkNDLbK2RBjMEeRlJ1W68/NLWgYAjTHxj0QI8vZQsavA2pOh7Scpg+RU5aNmOYA8Ysdi13D+F3B3moGsIOS0Td6q00oeLzCIcOonpDgRKZ5iIn1kQVhtd0Q4xHFSDqzToJUHvOKHzblKo14vAF4kNAOsxEicYnIqUpWGYDHcANb3COtQlCsnZDk7Wl4FhXEZJAWGpVdcpML3n8LdBxJyA5lXDYe49R8Ork02flw+YezJnbJ5K60tnU6TLlNga3XiebicSU0YvZPk5I6WWZCzdx9PFzS55wwEgcQ3j1qL2pYnBpF0zrhlqtm+VJN3X6n+gPJQm8dma2z1MIAaTzkCSTxwHiFW6OerMPfSMBFylSdobB6gJ7skwqjIRicSjGVmlGhN2Y94qQoO/eN4Yj+1MKOLupL0XG+3lB8QmQj0abulQFxw/ipntBk+AWi7MEUxGUD0VK3NsocwHLog85xHkVe6TYYAOKdPAjWRVhQXafJBazUPCky/j3+qNfBxnA6oO9++SmUCvbeaR74rzpvi81LVUH/1NNvJrOiB1XiT2r0QABl3af5WIb87KNKu14GAqEnqIafNrj2oXkKWGE3N2Z++qyPphgkcQ4EdxCtG+tiigXYS0QT/D0SO3LxTfdSDWq8/lvjQiA0kdo8U7+ItqiyiHZuaD3THVgl5IjcbpmWuHQPIkeIPqUh8yO7vS96QeePgEzva8D9kENLY6LQ5qnaFpLLM4tMEB0Hs/yq/RBJ6PHwUxSszoLC2WnNp48QRqirS/gHUvsrRctb+HFRrKNNz6QdUcDdd0C5rbxgQTOWucQqRZd1aj3ghk0709E4ls5ceS03ZOx3NuQ0NDQAGgyAMhgRwVV1atkX2TpFzZWGhB5Iz6Qgueeoaa58VGWeldzd1DsTi2V7xge8QgwoDXXpjqw7fuFVd+6oZZXgn6i1sam85s/wBt49itLDdaScIHp+iy3fPavz69xpmnTJI4OfBHaAM+0KEmVgrZS64w8T2yo6o+SSn9udgQOOJUc8SYVI6BP0HoM6M8YHefslmt/eR2LjBi1vb2DL1SljE1hzeB4wmFrBtu5lL9yx+EFgGHee3JWSiAGAzqVBbqMLKDW6Q6JzHSMeA8VMUiHvDNALxjnkPBM3SsSrZJ2VmEoIles7JkXtS6brRzjU5AIJaYbFHMiSNcxoc8etBrh2c8xyKWIB99ab1GEGRnqNDlmhoOzj2qvb0bGbXpuGElvcW4g+YPIhWC/wAO0agpGpUBbMYjGPMdyDVhTpmTbLD7PUktJdTJBBzNM5xxiAQdbqb/ABEtrX0mXCILpgaHHTqWl7X2Qx5vtwMZjOI4rH9/qdxzGaS4gcOXV0kzykZYbK9Z36dXqmwwJCUyPZHdBSdcYzxxSpZGbwSuymYydIWl7P2O17NM8+UhZ9sFwDmuP0kweR5+9FrGw7vymRmBjhwMeY8UydIVoJYbAaZ8cJxwU1QqEcfP3mnFGmCBI8I1KP8AIww4en6I4ABhmPfEIjmRj7y/RB7HDFvjPIpo91U4AtGIk4znp2FLJhihlvDai1hBddBnAYOdxgzh9WeCzytZbwvBoAObgDECOiwRkNXDPTiNBdsBj3X6pvRodTGupEgYZJhvFdYy4wBt7og64mCT1NKjJPbLRaWEZLtURHPHskkTzgjqUdTYpbbkF5j6QYHE6k+Q7lGPOneqR0JJZsNSd9T+wdqcbKp9NpH5vL2EzJi63tKsW5th+ZVePysnHiSfsnirdCSdI2DYp/dg8v09PFOdlPgvcSASbonRrJl3V0o7FGbFrm4Byjwj0HekrKXVKz7OJDPre7UsyDAdOlPeUZrQkXsnKc2gkNwpAnHK87j1IKSogNAa1oAAgAZYLqHdG6ilzVpg+/1XH1nNzbeHFv2KUDvfvtXC6PfvRBDDKpUa4yx11+ODsD1EFMq1RxMgXag/C7APHCfIqSrNY/BwH+PVMbRY3gdBweM7jjl/K7MI0axWzVQ9g7WkagtkQeeCzb4qbFc4sqNGElpgcZPorlZLdD3sxaTDi12DgRgZ0dIAhwzgp/baDLRScwwZHjDvuleMBR51tVMgjCDGPWD/AISY1HHEdeoV73n3Ye0Etb0m6jUBxE+IlVe0bLcG3gD3IWPQ93ae3pMdqMPMK+bv1HU3XZN12RZBHUWHLLRZfZ5bE5jvV23f2i+LsgjQvGX+4ZrdjVg02x1cYM564ajRPwMseHqFEWC0F7cTiP01UnTqHI9+GhTk2KDh7y/RJ1qQMnXH0KXP28yk8/fIhYwxqseMG58XdfCeapm8ldtO86S58ZnIE4TOn0mFbtpPutJvnLTqB9Fl299pc6WCboMumcToO45KMnbotBeSm2+0y8kc4PbmmwPHrPoEesOKSce7VUSwI3k4DqtI+G9hLA6qfxG6OoTr1yqJsuxPqva1ozInlGq2fYthDKbGNEBoHWY481WC8kZyxQhbH/JdhgDj3x9kputaJtD+bG+bvuk9tUb0zlmFA7u2w069R7pJaAxjfzOecCeqPFLMaBqdSs1olzgOH+EE0sVigX6n7x5znJs6AeqClgaiTx9+/coEHr9/ZdDkPmM4wnQBN7OI9j9Ezr2dumHUnrqjPzjvGibValP8480UAhNp2UuaHA3nsktOvMTwOSLu9br4fH4TBnQxiD1J9XdTMw/vBUfu8y5WrMdHSdfaQQZaWtE94OaElixosmLXZWvEloy8yq/X3eZLobIM4cOoq1NbEhcDEqyG6M1tm6bCfpgHUEyEhYt3n0ngh5I11wWnuoAxITR+zmOKZUByZFbPqXQPMDlwUzSqh844weHJN2WIsyxH6I7GieB/RFij67HPPjxC6R7/AN36pNpPX/gI7nZ4cfQrBIvaZw4HDGJ4jBZvvOQMIxOAGF90jINGDW4EkxJWpW6kSCAOOWGs4lVi17vmSRAfGLiMoOgUZRdloySRjteyuvQR0s44JWjsp7yG3TJwj1K0+zbsNZMCXHEucMTHlgVL2LYDWYxjj7CtFKskpP0V/djdwMaCRBOZ9ArpSpBggBHZZrowwQfgn7EupDbYd5KkbUaWVGVBhDgTzDSDir1tPVVHbLOietLLTGjtGqWOreY104EAjtCCjN1LRestI6hgb/T0fRdUCpNsejXBqB79lEplKe/fd4qiFCOpN/KO7tCb1GDRg64HZ9k6c734hJPHP3mEUAj6zOQUBQpNZbg6SDUYIGnQdjH9QVnqxw9n34Ku7bZD6NT8r7p6niPMNRllGWy2Bq64LlFwIB4hdICRBYVwRAOPNKPfh2eSTc7zOfUiALOXvRELQYn3guXhhJGQ8iih+XZx4QsYDKeWfbPD9Ece+0JMVP8AqgKmQ6h3GFjCgaMuPqECwcsfUfokr/p5wgx48vNYwq2kDjx9QukD3wRW1I46eBhJOq8vYlYx2o9Mqr12tXPs96Y1KucpkBjLaD1WtoC9hzUrb7RiYURXdghJ4DHZc9yLR+6cwfhd4EfcFBRe5lUte4n6XdH/AHAF3kCgpUOy9swMcMEqD799iStDwKhbIm6HEd4nwR2H377FRqnQqdoMTy95+SI4e+rEIzvfvqKI/wB9n6LGG1Rnvkcfuoja9G9Te0fVEjk4YjxAUxVHvqxCYVzmEwBbYlqD6THDgPJSJeFTdiWwU6j6RMC9Lep2I9R2KxPrgqeg7HNWoPPREfUHn6KOqWnn7lM6tt4+5KZGaJQ1h4NRPn8/y+ahn20eXgUh+3Djx14FY1E588cfYKHz8O8+Kgn27nx48UP2/AxOR9ymAThr8xkf+S4aoGvHzUG+1jHt9E1r7XY0xEEgyeaSUqaXsrDjcouXosdS1gePmm1W2D33qv19oniNUyftEpqJWWKraxrj+qYWq2YZ9ihH288U2faS5EFD6pWkrtOkXkNGZ8BxKZ0WFxUnsxsPPn7996yVhuhzvBaf2ajSFPMPn+xwJPMygozfauLtOmfqkuPIRAHvggq9US7MttntDjtCqC48OwXYCt7MvfBdQXMtv7LvS+kGPvxSTvfcggmANav28kwr5dgQQTIDKft7o16RGBLDJ4wf1U1QqkgY6LqCWWwxG9oeePuFGVXnj7hBBZGYzqPOOPFdYc0EFjBnFcvnjxQQRRglR54qE2k8zmggpcnyR1fj/CQGPN0YoheePuUEFRHM9hgl6SCCYDJGz4AJ/sv6kEFSO0Tfkg99f9Rn8n/YoIIJmIf/2Q=="
                    /> }
                    <input 
                       onChange = {(e) => setTweetMessage(e.target.value)}
                        value = {tweetMessage} 
                        placeholder = "What's happening" 
                        type = "text" 
                    />
                </div>
                <input 
                   value = {tweetImage}
                   onChange = { (e) => setTweetImage(e.target.value) }
                  
                    className = "tweetBox__imageInput"
                    placeholder = "Optional : Enter Image URL"
                    type = "text"
                />
                <Button 
                onClick = { sendTweet }
                type="submit"
                className = "tweetBox__tweetButton">Tweet</Button>
            </form>   
        </div>
    );
}

export default TweetBox
