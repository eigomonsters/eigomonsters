class PkpkrankedmatchdatasController < ApplicationController
  def index
    # ランクマデータの取得
    pkpkrankedmatchdata = Pkpkrankedmatchdata.all
    render status: 200, json: { pkpkrankedmatchdata: pkpkrankedmatchdata }
  end
end
