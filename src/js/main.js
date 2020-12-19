import './lib/lib'
import $ from "./lib/core";

$('#first').on('click', () => {
    $('div').eq(1).fadeToggle(800);
})
$('[data-count="second"]').on('click', () => {
    $('div').eq(2).fadeToggle(800);
})
$('button').eq(2).on('click', () => {
    $('.w-500').fadeToggle(800);
})

$('#trigger').createModal({
    text: {
        title: 'Title',
        body: 'lorem lorem lorem'
    },
    btns: {
        count: 3,
        settings: [
            [
                'Close',
                ['btn-danger', 'mr-10'],
                true
            ],
            [
                'Save changes',
                ['btn-success', 'mr-10'],
                false,
                () => {
                    alert('Data have saved!')
                }
            ],
            [
                'Another btn',
                ['btn-warning'],
                false,
                () => {
                    alert('Data have saved!')
                }
            ],
        ]
    }
})

$('#trigger2').createModal({
    text: {
        title: 'Title 2',
        body: 'lorem lorem lorem lorem lorem lorem lorem lorem'
    },
    btns: {
        count: 1,
        settings: [
            [
                'Close',
                ['btn-danger', 'mr-10'],
                true
            ]
        ]
    }
})

// $('.wrap').html(
//     `
//         <div class="dropdown">
//             <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
//             <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
//                 <a href="#" class="dropdown-item">Action #1</a>
//                 <a href="#" class="dropdown-item">Action #2</a>
//                 <a href="#" class="dropdown-item">Action #3</a>
//             </div>
//         </div>
//     `
// )
//
// $('.dropdown-toggle').dropdown();