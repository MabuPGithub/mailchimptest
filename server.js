import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  //apiKey disabled needs new key
  apiKey: "n/a",
  server: "n/a",
});

async function run() {
    //Uncomment to test some of the codes

    //first call 
    const response = await mailchimp.ping.get();

    //get all lists 
    //const response = await mailchimp.lists.getAllLists();

    //create a new list
    /*const response = await mailchimp.lists.createList({
        name: "Kawaii",
        permission_reminder: "permission_reminder",
        email_type_option: true,
        contact: {
          company: "productionKawaii",
          address1: "1 chome",
          city: "Tokyo",
          country: "Japan",
        },
        campaign_defaults: {
          from_name: "Kyouske Koshita",
          from_email: "admin@l-oy.com",
          subject: "",
          language: "Japanese",
        },
      });*/


    //list_id = f5c9d033df
    //get list info
    //const response = await mailchimp.lists.getList("f5c9d033df");

    //add member email
    //id = 9cb14b499be76bb04fdbef92f29c744b(for testemail@gmail.com)
    //contact_id = 25c7592ec86e29ea2f92ef7835da4a39
    //mailertest@gmail.com
    /*const response = await  mailchimp.lists.addListMember("f5c9d033df", {
        email_address: "mailertest@gmail.com",
        status: "subscribed",
    });*/
    
    //update member's detail
    /*const response = await mailchimp.lists.updateListMember(
        "f5c9d033df",
        "mailertest@gmail.com",
        {language: "ar"}
      );*/

    //updating a member to unsubscribed
    /*const response = await mailchimp.lists.updateListMember(
        "f5c9d033df",
        "testemail@gmail.com",
        {status: "unsubscribed"}
      );*/
    console.log(response);

}
run();