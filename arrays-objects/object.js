var appData = {
    name: 'Gmail',
    mailboxes: {
            inbox: [
            {   from: 'Mark',
                subject: 'How many ducks do you have?',
                date: '3/20/22'
            },
            {   from: 'Bob',
                subject: 'Duck feed',
                date: '3/21/22'
            }
            ],
            junk: {
                from: 'xyz@thoma.me',
                subject: 'big brain time',
                date: '3/21/22'
            },
            sent: [{
                
            }],
            outbox: [
                {to: 'howard@manatee.com',
                subject: '2 ton tanks',
                date: '3/21/22'}
            ]
            ,
            drafts: [
                {to: 'howard@duck.com',
                subject: '2 ton tanks',
                date: '3/21/22'}
            ],
            
    },
    apps: {
        contacts: [
            {name: 'Brittany', lastMessage: "Coming over soon!", email: 'bdawg@gmail.com'},
            {name: 'Zach', lastMessage: "New MIDI pad with 8 knobs and backlit drum pads", email: 'zachattack@gmail.com'},
            {name: 'Ashley', lastMessage: "Visa delayed :(", email: 'ashmallpal@oe.com'},
        ],
        calendar: [
            {date: '3/22/22', time: '4:30 pm', event: 'happy hour'},
            {date: '3/23/22', time: '6:00 pm', event: 'cheesecake tasting'},
            {date: '3/26/22', time: '8:00 pm', event: 'jesus christ superstar'}
        ],
    },
    getMailboxes: function() {
        console.log(Object.keys(appData.mailboxes));
    },
    getEmails: function() {
        console.log(appData.mailboxes);
    },
    getSecondEmail: function() {
        console.log(appData.mailboxes.inbox[1]);
    },
    markSent: function() {
        appData.mailboxes.sent.push(appData.mailboxes.outbox.pop());
        console.log(appData.mailboxes.sent)
    },
    addDraft: function(email){
        appData.mailboxes.drafts.push(email);
        console.log(appData.mailboxes.drafts);
    }
}

appData.getMailboxes();
appData.getEmails();
appData.getSecondEmail();
appData.markSent();
appData.addDraft({to: 'howard@duck.com',
subject: 'more shoes please',
date: '3/22/22'});

