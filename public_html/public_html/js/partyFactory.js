define(['ojs/ojcore', 'jquery', 'knockout', 'ojs/ojmodel'], function (oj, $, ko ) {

//    var self= this;
//    self.data = ko.observable();
//    self.dataLoaded = ko.observable(false);
    




    var PartyFactory = {

//         partyHost: data.node.nodes[2],
//         console.log(partyHost);

        //partyid: ko.observable(this.partyId),
       
        


        createPartyModel: function (partyId, partyname, url) {
            var resourceUrl = url + "/party/" ;
            console.log(partyId);
            console.log(partyname);
            console.log(resourceUrl);
            if (partyname !== null) {
            var Party = oj.Model.extend({urlRoot: resourceUrl + "match/" + partyname,
            idAttribute: partyname});
            return new Party();
            } else if (partyId !== null) {
            var Party = oj.Model.extend({urlRoot: resourceUrl + partyId,
            idAttribute: partyId});
            return new Party();
            }

        },
        fetchUrl : function () {
            var id = null;
            var uri = "http://129.146.1.229:31490/fsgbu/10.0.0.71:2394/default/party-service";
            var serviceUrl = oj.Model.extend({urlRoot: uri, idAttribute: id});
            return new serviceUrl();
            
                    
//        $.get("http://129.146.1.229:31490/fsgbu/10.0.0.71:2394/default/party-service", function (data, status) {
//                //alert("Data: " + data + "\nStatus: " + status);
//               console.log(data);
//               console.log(status);
//               self.data(data.serviceURL);
//               self.dataLoaded(true);
//               console.log("Json Parse Data: " + self.data());
// 
//           });
       }
    }
    return PartyFactory;
});