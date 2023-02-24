import {createStore} from 'vuex'
import createPersistedState from "vuex-persistedstate"
import axios from "axios";

export default createStore({
    state: {
        authClient: {},
        employeeData: {
            info: 'Responsible accountant',
            first: 'Vigdis Berntsberg Lundahl (Accountant)',
            second: 'Hilde Lindstrøm Berland (Manager)',
        },
        services: [],
        processes: [],
        myServices: [
            {
                id: 'time-usage',
                title: 'Time usage',
            },
            // {
            //   id: 'invoice',
            //   title: 'Invoice',
            // },
            {
                id: 'help-desk',
                title: 'Help desk',
            },
            // {
            //   id: 'setting',
            //   title: 'Setting',
            // },
        ],
        serviceTasksOngoing: [
            {
                id: 1,
                title: 'Bookkeeping',
                deadline: 'Oct 15, 2021',
                subtasks: [
                    {
                        id: 1,
                        title: 'Subtask 1',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur expedita illo illum iure nihil odit placeat repudiandae tempore ullam.',
                        completed: true,
                        notification_log_id: 1,
                    },
                    {
                        id: 2,
                        title: 'Subtask 2',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores commodi deleniti ex facilis iste labore laboriosam minus modi perspiciatis culpa cumque dolorem dolorum, expedita id impedit laudantium minima, nesciunt omnis perspiciatis, quidem suscipit ut? Aperiam culpa eaque facere quibusdam soluta. Animi, aperiam est fugiat fugit id impedit ipsam iste itaque laudantium molestiae nam nemo neque nesciunt odio pariatur perspiciatis placeat porro praesentium quod, quos repellendus sed sequi similique tempora temporibus voluptate voluptates. Cumque deserunt dolor ipsam natus quae. Optio.',
                        completed: false,
                        notification_log_id: 2,
                    },
                    {
                        id: 3,
                        title: 'Subtask 3',
                        description: 'Lorem ipsum dolor sit amet,temporibus voluptate voluptates. Cumque deserunt dolor ipsam natus quae. Optio.',
                        completed: false,
                        ticket_comment_id: 13,
                    },
                    {
                        id: 4,
                        title: 'Subtask 4',
                        description: 'Ista suscipit temporibus. Accusamus architecto, eveniet laborum neque nas Option.',
                        completed: false,
                        ticket_comment_id: 12,
                    },
                ]
            },
            {
                id: 2,
                title: 'Bookkeeping 1',
                deadline: 'Oct 16, 2021',
                subtasks: [
                    {
                        id: 5,
                        title: 'Subtask 1',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur expedita illo illum iure nihil odit placeat repudiandae tempore ullam.',
                        completed: true,
                        ticket_comment_id: 10,
                    },
                    {
                        id: 6,
                        title: 'Subtask 2',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores commodi deleniti ex facilis iste labore laboriosam minus modi perspiciatis quidem, recusandae repellendus sequi sint sit soluta suscipit temporibus. Accusamus architecto, eveniet laborum neque nisi provident totam voluptates! Animi culpa cumque dolorem dolorum, expedita id impedit laudantium minima, nesciunt omnis perspiciatis, quidem suscipit ut? Aperiam culpa eaque facere quibusdam soluta. Animi, aperiam est fugiat fugit id impedit ipsam iste itaque laudantium molestiae nam.',
                        completed: false,
                    },
                ]
            },
        ],
        serviceTasksByYear: {
            2022: [
                {
                    id: 3,
                    title: 'Bookkeeping 2022',
                    deadline: 'Oct 15, 2022',
                    subtasks: [
                        {
                            id: 7,
                            title: 'Subtask 1',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur expedita illo illum iure nihil odit placeat repudiandae tempore ullam.',
                            completed: true,
                            notification_log_id: 3,
                        },
                        {
                            id: 8,
                            title: 'Subtask 2',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores commodi deleniti ex facilis iste labore laboriosam minus modi perspiciatis culpa cumque dolorem dolorum, expedita id impedit laudantium minima, nesciunt omnis perspiciatis, quidem suscipit ut? Aperiam culpa eaque facere quibusdam soluta. Animi, aperiam est fugiat fugit id impedit ipsam iste itaque laudantium molestiae nam nemo neque nesciunt odio pariatur perspiciatis placeat porro praesentium quod, quos repellendus sed sequi similique tempora temporibus voluptate voluptates. Cumque deserunt dolor ipsam natus quae. Optio.',
                            completed: true,
                            ticket_comment_id: 9,
                        },
                        {
                            id: 9,
                            title: 'Subtask 3',
                            description: 'Lorem ipsum dolor sit amet,temporibus voluptate voluptates. Cumque deserunt dolor ipsam natus quae. Optio.',
                            completed: true,
                        },
                        {
                            id: 10,
                            title: 'Subtask 4',
                            description: 'Ista suscipit temporibus. Accusamus architecto, eveniet laborum neque nas Option.',
                            completed: true,
                        },
                    ]
                },
                {
                    id: 4,
                    title: 'Bookkeeping 2022',
                    deadline: 'Oct 16, 2022',
                    subtasks: [
                        {
                            id: 11,
                            title: 'Subtask 1',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur expedita illo illum iure nihil odit placeat repudiandae tempore ullam.',
                            completed: true,
                        },
                        {
                            id: 12,
                            title: 'Subtask 2',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores commodi deleniti ex facilis iste labore laboriosam minus modi perspiciatis quidem, recusandae repellendus sequi sint sit soluta suscipit temporibus. Accusamus architecto, eveniet laborum neque nisi provident totam voluptates! Animi culpa cumque dolorem dolorum, expedita id impedit laudantium minima, nesciunt omnis perspiciatis, quidem suscipit ut? Aperiam culpa eaque facere quibusdam soluta. Animi, aperiam est fugiat fugit id impedit ipsam iste itaque laudantium molestiae nam.',
                            completed: true,
                        },
                    ]
                },
                {
                    id: 13,
                    title: 'Bookkeeping 2022',
                    deadline: 'Oct 16, 2022',
                    subtasks: [
                        {
                            id: 21,
                            title: 'Subtask 1',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur expedita illo illum iure nihil odit placeat repudiandae tempore ullam.',
                            completed: true,
                        },
                        {
                            id: 22,
                            title: 'Subtask 2',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores commodi deleniti ex facilis iste labore laboriosam minus modi perspiciatis quidem, recusandae repellendus sequi sint sit soluta suscipit temporibus. Accusamus architecto, eveniet laborum neque nisi provident totam voluptates! Animi culpa cumque dolorem dolorum, expedita id impedit laudantium minima, nesciunt omnis perspiciatis, quidem suscipit ut? Aperiam culpa eaque facere quibusdam soluta. Animi, aperiam est fugiat fugit id impedit ipsam iste itaque laudantium molestiae nam.',
                            completed: true,
                        },
                    ]
                },
            ],
            2021: [
                {
                    id: 5,
                    title: 'Bookkeeping 2021',
                    deadline: 'Oct 15, 2021',
                    subtasks: [
                        {
                            id: 13,
                            title: 'Subtask 1',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur expedita illo illum iure nihil odit placeat repudiandae tempore ullam.',
                            completed: true,
                        },
                        {
                            id: 14,
                            title: 'Subtask 2',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores commodi deleniti ex facilis iste labore laboriosam minus modi perspiciatis culpa cumque dolorem dolorum, expedita id impedit laudantium minima, nesciunt omnis perspiciatis, quidem suscipit ut? Aperiam culpa eaque facere quibusdam soluta. Animi, aperiam est fugiat fugit id impedit ipsam iste itaque laudantium molestiae nam nemo neque nesciunt odio pariatur perspiciatis placeat porro praesentium quod, quos repellendus sed sequi similique tempora temporibus voluptate voluptates. Cumque deserunt dolor ipsam natus quae. Optio.',
                            completed: true,
                        },
                        {
                            id: 15,
                            title: 'Subtask 3',
                            description: 'Lorem ipsum dolor sit amet,temporibus voluptate voluptates. Cumque deserunt dolor ipsam natus quae. Optio.',
                            completed: true,
                        },
                        {
                            id: 16,
                            title: 'Subtask 4',
                            description: 'Ista suscipit temporibus. Accusamus architecto, eveniet laborum neque nas Option.',
                            completed: true,
                        },
                    ]
                },
                {
                    id: 6,
                    title: 'Bookkeeping 1 2021',
                    deadline: 'Oct 16, 2021',
                    subtasks: [
                        {
                            id: 17,
                            title: 'Subtask 1',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur expedita illo illum iure nihil odit placeat repudiandae tempore ullam.',
                            completed: true,
                        },
                        {
                            id: 18,
                            title: 'Subtask 2',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores commodi deleniti ex facilis iste labore laboriosam minus modi perspiciatis quidem, recusandae repellendus sequi sint sit soluta suscipit temporibus. Accusamus architecto, eveniet laborum neque nisi provident totam voluptates! Animi culpa cumque dolorem dolorum, expedita id impedit laudantium minima, nesciunt omnis perspiciatis, quidem suscipit ut? Aperiam culpa eaque facere quibusdam soluta. Animi, aperiam est fugiat fugit id impedit ipsam iste itaque laudantium molestiae nam.',
                            completed: true,
                        },
                    ]
                },
            ],
        },
        timeUsageRecords: [
            {
                id: 1,
                type: 'task',
                title: 'Salary',
                description: 'Payroll processing is the act of managing employee payments. It covers everything from inputting an employee into your payroll software to giving them their paychecks. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
                date: '01.02.2021',
                time: 20,
                cost: '25,00',
            },
            {
                id: 2,
                type: 'ticket',
                title: 'We lack documents',
                description: 'It covers everything from inputting an employee into your payroll software to giving them their paychecks. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
                date: '03.02.2021',
                time: 123,
                cost: '290,00',
            },
            {
                id: 3,
                type: 'task',
                title: 'Salary',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur expedita illo illum iure nihil odit placeat repudiandae tempore ullam.',
                date: '01.02.2021',
                time: 13,
                cost: '125,00',
            },
            {
                id: 4,
                type: 'ticket',
                title: 'We lack documents',
                description: 'Payroll processing is the act of managing employee payments. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
                date: '03.02.2021',
                time: 1,
                cost: '29,00',
            },
        ],
        invoices: [
            {
                id: 1,
                control_number: '719876111',
                time_usage: 1.08,
                amount: 12.10,
                due_at: '11.02.2021',
                created_at: '01.02.2021',
            },
            {
                id: 2,
                control_number: '719876111',
                time_usage: 21.08,
                amount: 435.00,
                due_at: '15.02.2021',
                created_at: '03.02.2021',
            },
            {
                id: 3,
                control_number: '719876111',
                time_usage: 12.08,
                amount: 890.50,
                due_at: '12.02.2021',
                created_at: '03.02.2021',
            },
            {
                id: 4,
                control_number: '719876111',
                time_usage: 11.28,
                amount: 512.50,
                due_at: '11.02.2021',
                created_at: '01.02.2021',
            },
        ],
        clientHelpSettings: [
            {
                id: 1,
                title: 'Get a call from customer service',
                description: 'Payroll processing is the act of managing employee payments. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                id: 2,
                title: 'Be contacted by email by customer service',
                description: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            },
            {
                id: 3,
                title: 'Get a copy of the invoice',
                description: 'Processing is the act of managing employee payments. Lorem ipsum dolor sit amet',
            },
            {
                id: 4,
                title: 'Change your company\'s contact information',
                description: 'Integer ac tellus scelerisque dolor dictum tempor. Praesent nunc mi, luctus nec blandit et, tempor et nisi. Nunc maximus dignissim tortor, a ornare odio efficitur ut.',
            },
            {
                id: 5,
                title: 'Change the company\'s contact person',
                description: 'Commodo quis pretium eu, gravida in est. In facilisis erat accumsan, viverra lectus a, tincidunt lectus. Quisque pretium dapibus metus sed mollis. Proin mattis pellentesque mauris, eget mollis nunc feugiat quis. Fusce vulputate eros ac arcu auctor, ut blandit nisi euismod.',
            },
            {
                id: 6,
                title: 'Investigate double payment',
                description: 'Cehicula felis a, faucibus augue. Sed semper libero at quam sodales, et tempus lacus tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque accumsan diam quis tortor pharetra, ac gravida magna semper. Quisque euismod.',
            },
            {
                id: 7,
                title: 'Apply for a postponement of the invoice',
                description: 'Mauris egestas accumsan justo sed sodales. Vivamus posuere, sem nec semper condimentum, quam velit vulputate magna, in eleifend urna purus sit amet erat. Fusce id purus convallis, feugiat dolor non, dictum elit. Nulla facilisi. Etiam accumsan id erat a viverra. Curabitur blandit pulvinar volutpat. Cras vel convallis mauris, rhoncus convallis augue. Curabitur faucibus dui a diam rhoncus, sed laoreet velit cursus. Etiam iaculis, nunc eget aliquet volutpat, felis lacus elementum purus, sed pretium mi ex ac urna.',
            },
            {
                id: 8,
                title: 'Reactivate the customer relationship',
                description: 'Praesent interdum, neque quis semper lacinia, risus risus faucibus ex, id interdum velit ligula nec elit.',
            },
            {
                id: 9,
                title: 'Terminate the customer relationship',
                description: 'Duis ac nisl vulputate, rutrum elit quis, maximus lectus. Pellentesque eleifend libero massa, vitae fermentum nulla efficitur in.',
            },
            {
                id: 10,
                title: 'Switch to another consultant (free of charge)',
                description: 'Quisque efficitur, nibh ac pharetra facilisis, sapien tellus semper augue, nec ultrices dolor magna in velit. Maecenas egestas.',
            },
            {
                id: 11,
                title: 'Criticism and praise',
                description: 'Qesque id nunc tristique, semper tellus quis, ultricies nunc. Vestibulum sit amet tempor quam, ut aliquam nulla. Maecenas urna sem, commodo quis pretium eu, gravida in est. In facilisis erat accumsan, viverra lectus a, tincidunt lectus. Quisque pretium dapibus metus sed mollis. Proin.',
            },
            {
                id: 12,
                title: 'Submit a complaint',
                description: 'Conseclutpat sed arcu et finibus. Nunc vulputate purus massa, a molestie urna vehicula quis. Morbi id diam eros. Nam dignissim elit sit amet lectus suscipit imperdiet. Mauris quis placerat ligula, in vehicula quam. Sed faucibus vel quam quis egestas. Maecenas id magna elementum, porttitor dui vitae, imperdiet odio. Fusce pellentesque bibendum faucibus. Suspendisse iaculis sapien ut semper sollicitudin. Nulla pltetur',
            },
            {
                id: 13,
                title: 'Investigate debt collection case',
                description: 'Welis a, faucibus augue. Sed semper libero at quam sodales, et tempus lacus tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque accumsan diam quis tortor pharetra, ac gravida magna semper. Quisque euismod volutpat ligula.',
            },
        ]
    },
    getters: {
        isAuthenticated: state => Object.keys(state.authClient).length !== 0 && !!localStorage.getItem('api-xsrf-token'),
    },
    mutations: {
        SET_AUTH_CLIENT(state, client) {
            state.authClient = client;
        },
        SET_SERVICES(state, services) {
            const descriptionLength = 40;
            const colors = [
                'primary',
                'success',
                'danger',
                'secondary',
                'info',
            ];

            state.services = services.map((element, index) => {
                element.color = colors[(index % 5)];

                let cleanDescription = element.description.replace(/<\/?[^>]+(>|$)/g, "");
                element.description = cleanDescription;

                element.shortDescription = cleanDescription.length > descriptionLength ?
                    cleanDescription.substring(0, descriptionLength - 3) + "..." :
                    cleanDescription;

                return element;
            });
        },
        SET_PROCESSES(state, processes) {
            state.processes = processes;
        },
    },
    actions: {
        setAuthClient(context, client) {
            context.commit('SET_AUTH_CLIENT', client)
        },
        getServices(context) {
            axios.get(`/api/dashboard/services`).then(response => {
                if (response.data.data.services) {
                    context.commit('SET_SERVICES', Object.values(response.data.data.services))
                }
            })
        },
        getProcesses(context) {
            axios.get(`/api/dashboard/processes`).then(response => {
                if (response.data.data.processes) {
                    context.commit('SET_PROCESSES', Object.values(response.data.data.processes))
                }
            })
        }
    },
    modules: {},
    plugins: [createPersistedState()]
})
