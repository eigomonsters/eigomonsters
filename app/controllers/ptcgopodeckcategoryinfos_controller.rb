class PtcgopodeckcategoryinfosController < ApplicationController
  def getinfo
      ptcgopodeckinfo = Ptcgopodeckcategoryinfo.all
      render status: 200, json: { ptcgopodeckinfo: ptcgopodeckinfo }
  end

  def count
    opo_deck_count = Ptcgopodeckcategoryinfo.count
    render status: 200, json: { opo_deck_count: opo_deck_count }
  end

end
