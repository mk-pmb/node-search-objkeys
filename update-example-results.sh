#!/bin/bash
# -*- coding: utf-8, tab-width: 2 -*-
SELFPATH="$(readlink -m "$0"/..)"


function main () {
  cd "$SELFPATH" || return $?

  local DEMO_JS=example.js
  local RESULTS=()
  readarray -t RESULTS < <(nodejs "$DEMO_JS" | tr '\n' '\r' | sed -re '
    s~\]\r\s+~]\n~g')

  local CODE_LNS=()
  readarray -t CODE_LNS <"$DEMO_JS"
  local CODE_LN=
  >"$DEMO_JS".new
  for CODE_LN in "${CODE_LNS[@]}"; do
    case "$CODE_LN" in
      '//  '* ) ;;
      'demo('* )
        echo "$CODE_LN" | tee -a "$DEMO_JS".new
        <<<"//  ${RESULTS[0]}" sed -re 's~\r~\n//  ~g' | tee -a "$DEMO_JS".new
        RESULTS=( "${RESULTS[@]:1}" )
        echo
        ;;
      * )
        echo "$CODE_LN" >>"$DEMO_JS".new
        ;;
    esac
  done

  mv -v "$DEMO_JS"{.new,}
  return 0
}








main "$@"; exit $?
