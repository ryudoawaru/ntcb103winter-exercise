#require 'sinatra'
require 'rack'

use Rack::Static, :urls => [""], :root => 'public', :index =>
'index.html'

#class MyApp < Sinatra::Application
#
#  get '/' do
#    redirect '/frontend/index.html'
#  end
#
#  get '/admin' do
#    redirect '/admin/index.html'
#  end
#  get '/frontend' do
#    redirect '/frontend/index.html'
#  end
#
#end

#run MyApp
run lambda { |env|
  [
      200,
      {
            'Content-Type'  => 'text/html',
            'Cache-Control' => 'public, max-age=86400'
          },
      File.open('public/index.html', File::RDONLY)
    ]
}
