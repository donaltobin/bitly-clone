get "/" do
	puts "[LOG] Getting /"
	puts "[LOG] Params: #{params.inspect}"
	@urls = Url.all
  erb :"static/index"
end

post '/create' do

	x = Url.new(long_url: params[:long_url], click_count: 0)
	if x.save
		redirect '/'
	else 
		redirect '/static/error'
	end
end

get '/static/error' do
	erb :"static/error"
end


post '/urls' do
	Url.create(long_url: params[:long_url])
	redirect "/"
end

get '/:short_url' do
 	url = Url.find_by short_url: params[:short_url]
	
	
	if url.present?
		Url.increment_counter(:click_count, url.id)
		if url.long_url =~ /^www/
			redirect "http://" + url.long_url
		else 
			redirect url.long_url
		end
	else
		redirect '/static/error'
	end
end