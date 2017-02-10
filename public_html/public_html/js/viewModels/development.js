/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojbutton'],
        function (oj, ko, $)
        {

            function developmentViewModel() {
                var self = this;
               
              self.partyClicked = function (data, event) {
                    self.router = oj.Router.rootInstance;
                    self.router.stateId('party');
                }
                

            }

           return developmentViewModel;
            
        });