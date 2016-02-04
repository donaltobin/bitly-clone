class Url < ActiveRecord::Base
	# This is Sinatra! Remember to create a migration!
	validates :long_url, presence: { message: "this url has been shortened" }
	validates_format_of :long_url, with: /(http:\/\/|https:\/\/)?(www)?.[a-z0-9]+([\-\.]{1}[a-z0-9]+)*./ix
	# validates_format_of :long_url, with: (URI::regexp(['http','https']))

	before_create :shorten

	def shorten
		self.short_url = rand(36**8).to_s(36)
	end
end
