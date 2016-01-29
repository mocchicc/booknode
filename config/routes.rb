Rails.application.routes.draw do
 resources :books do
   collection do
     post :set_layout
   end
   member do
     get  :contents
   end
 end

end
