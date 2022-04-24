CREATE TABLE jobs (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name TEXT NOT NULL,
    pay INTEGER NOT NULL,
    description TEXT NOT NULL,
    link TEXT NOT NULL,
    primary_tag TEXT NOT NULL,
    color TEXT NOT NULL,
);

CREATE TABLE subscribers (
    email TEXT NOT NULL PRIMARY KEY,
);

//
insert into jobs (name, pay, description, link, primary_tag, color) values (
    'Ghost',
    '$85,000',
    '💵 Competitive salary
     Based on role, skill, experience and location.

     🌍 Work from anywhere
     From a home office, or travel continuously if that's your thing. Everything we do is online. As long as you have wifi, you're all set.

     💻 Hardware
     A new laptop + $500 office workspace setup budget.

     🏢 Co-working
     If you prefer to work from a co-working space, we'll help pay for it.

     📚 Continue your personal development
     There's a budget for attending conferences, taking courses, and purchasing books.

     ✈️ Team retreats
     The last few trips have taken us to Dubai, Thailand, Austria & Egypt.

     📅 Last Friday of the month off!
     We close the office on the last Friday of each month. Enjoy!

     🏝 Unlimited paid vacation
     If you don't take a minimum of a 2 week break yourself, we'll kick you out of the office in December.

     👶 Paid parental leave
     When the time comes to welcome a new member of the family, we offer generous and fully paid parental leave.

     📈 Pay reviews
     Everyone at Ghost receives an annual pay review.

     🐶 Dog friendly office

     ...just kidding we literally don't have an office. So, um. Feel free to work with your dog. Cats are cool, too.',
    'https://www.google.com',
    'Developer',
    '#ff0000'
);
