class Url < ActiveRecord::Base
	# This is Sinatra! Remember to create a migration!

	before_create :shorten
	
	def shorten
		self.short_url = rand(36**8).to_s(36)
	end
end
