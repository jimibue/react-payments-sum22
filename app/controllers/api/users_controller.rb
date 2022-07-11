class Api::UsersController < ApplicationController

    def update_image
      file = params[:file]
      # this is insecure way not validating token not protected
      user = User.find(params[:id])
      # first we want to upload image to cloudinary
      if file 
        begin
          cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true, resource_type: :auto)
         
          # if successfull lets add the image url to our user
          user.image = cloud_image['secure_url']
          
          if user.save
            render json: user
          else
            render json: {
                    errors: user.errors, 
                    message:'cloudinary upload worked, something went wrong trying to save user'},
                  status: 422
           end 
        rescue => e
           # error occured uploading to cloudinary 
           render json: {errors: e, message:'something went wrong uploading image to cloudinary'}, status: 422
        end
      end
    end
end
