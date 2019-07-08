let
 nix-shell-release-tag = "1bec999b8b0930381b1af07390a7eaec5bf78f25";
 nix-shell-release-sha256 = "1b4nyg5gqz4lq52xz8lnicvvlrpgj6ni1aqn9qnrn7byr10bih79";

 nix-shell = import (fetchTarball {
  url = "https://github.com/thedavidmeister/nix-shadow-cljs/tarball/${nix-shell-release-tag}";
  sha256 = "${nix-shell-release-sha256}";
 });
 # holonix = import ../holonix;
in
with nix-shell.pkgs;
{
 core-shell = stdenv.mkDerivation (nix-shell.shell // {
  name = "core-shell";

  buildInputs = []
   ++ nix-shell.shell.buildInputs
  ;
 });
}
