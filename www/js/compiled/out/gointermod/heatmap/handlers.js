// Compiled by ClojureScript 1.7.170 {}
goog.provide('gointermod.heatmap.handlers');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('gointermod.utils.utils');
goog.require('gointermod.db');
gointermod.heatmap.handlers.max_key_orthologs = (function gointermod$heatmap$handlers$max_key_orthologs(organism,orthologs){

return cljs.core.map.call(null,(function (p__26904){
var vec__26905 = p__26904;
var orthk = cljs.core.nth.call(null,vec__26905,(0),null);
var terms = cljs.core.nth.call(null,vec__26905,(1),null);
var termk = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.val,terms);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [organism,orthk,cljs.core.key.call(null,termk)], null),cljs.core.val.call(null,termk)], null);
}),orthologs);
});
gointermod.heatmap.handlers.get_ortholog_count_max = (function gointermod$heatmap$handlers$get_ortholog_count_max(results){

return cljs.core.apply.call(null,cljs.core.max_key,(function (p__26910){
var vec__26911 = p__26910;
var organism = cljs.core.nth.call(null,vec__26911,(0),null);
var orthologs = cljs.core.nth.call(null,vec__26911,(1),null);
return orthologs;
}),cljs.core.map.call(null,(function (p__26912){
var vec__26913 = p__26912;
var organism = cljs.core.nth.call(null,vec__26913,(0),null);
var orthologs = cljs.core.nth.call(null,vec__26913,(1),null);
return cljs.core.apply.call(null,cljs.core.max_key,cljs.core.last,gointermod.heatmap.handlers.max_key_orthologs.call(null,organism,orthologs));
}),results));
});
gointermod.heatmap.handlers.merge_results = (function gointermod$heatmap$handlers$merge_results(results,go_branch){

return cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"go-term","go-term",250143271),cljs.core.filter.call(null,(function (result){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ontology-branch","ontology-branch",102202782).cljs$core$IFn$_invoke$arity$1(result),go_branch);
}),cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,(function (p__26916){
var vec__26917 = p__26916;
var _ = cljs.core.nth.call(null,vec__26917,(0),null);
var organism = cljs.core.nth.call(null,vec__26917,(1),null);
return organism;
}),results))));
});
gointermod.heatmap.handlers.extract_go_terms = (function gointermod$heatmap$handlers$extract_go_terms(results){

return cljs.core.distinct.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (result){
return new cljs.core.Keyword(null,"go-term","go-term",250143271).cljs$core$IFn$_invoke$arity$1(result);
}),results)));
});
gointermod.heatmap.handlers.aggregate_orthologs = (function gointermod$heatmap$handlers$aggregate_orthologs(results){

return cljs.core.reduce.call(null,(function (new_map,result){
return cljs.core.update_in.call(null,new_map,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ortho-organism","ortho-organism",762660355).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.Keyword(null,"display-ortholog-id","display-ortholog-id",234365334).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.Keyword(null,"go-term","go-term",250143271).cljs$core$IFn$_invoke$arity$1(result)], null),cljs.core.inc);
}),cljs.core.PersistentArrayMap.EMPTY,results);
});
gointermod.heatmap.handlers.map_terms = (function gointermod$heatmap$handlers$map_terms(term_list,organism_ortholog_terms){

return cljs.core.map.call(null,(function (term){
return cljs.core.get.call(null,organism_ortholog_terms,term,(0));
}),term_list);
});
gointermod.heatmap.handlers.build_result_matrix = (function gointermod$heatmap$handlers$build_result_matrix(go_terms,aggregate_ortholog_counts){

return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,(function (p__26922){
var vec__26923 = p__26922;
var organism = cljs.core.nth.call(null,vec__26923,(0),null);
var orthologs = cljs.core.nth.call(null,vec__26923,(1),null);
return cljs.core.map.call(null,((function (vec__26923,organism,orthologs){
return (function (p__26924){
var vec__26925 = p__26924;
var ortholog = cljs.core.nth.call(null,vec__26925,(0),null);
var terms = cljs.core.nth.call(null,vec__26925,(1),null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [organism,ortholog], null),gointermod.heatmap.handlers.map_terms.call(null,go_terms,terms));
});})(vec__26923,organism,orthologs))
,orthologs);
}),aggregate_ortholog_counts));
});
gointermod.heatmap.handlers.find_missing_organisms = (function gointermod$heatmap$handlers$find_missing_organisms(counts){
var organism_details = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"organisms","organisms",-239799703)], null));
var all_organism_names = cljs.core.reduce.call(null,((function (organism_details){
return (function (new_set,p__26928){
var vec__26929 = p__26928;
var name = cljs.core.nth.call(null,vec__26929,(0),null);
var organism = cljs.core.nth.call(null,vec__26929,(1),null);
return cljs.core.conj.call(null,new_set,new cljs.core.Keyword(null,"abbrev","abbrev",10803847).cljs$core$IFn$_invoke$arity$1(organism));
});})(organism_details))
,cljs.core.PersistentHashSet.EMPTY,cljs.core.deref.call(null,organism_details));
var shown_organism_names = cljs.core.set.call(null,cljs.core.keys.call(null,counts));
return clojure.set.difference.call(null,all_organism_names,shown_organism_names);
});
gointermod.heatmap.handlers.extract_results = (function gointermod$heatmap$handlers$extract_results(search_results){
var active_filter = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-filter","active-filter",845441376)], null));
var merged_results = gointermod.heatmap.handlers.merge_results.call(null,search_results,cljs.core.deref.call(null,active_filter));
var go_terms = gointermod.heatmap.handlers.extract_go_terms.call(null,merged_results);
var counts = gointermod.heatmap.handlers.aggregate_orthologs.call(null,merged_results);
var final_heatmap_matrix = gointermod.heatmap.handlers.build_result_matrix.call(null,go_terms,counts);
var max_count = gointermod.heatmap.handlers.get_ortholog_count_max.call(null,counts);
var organisms_present = cljs.core.keys.call(null,counts);
var missing_organisms = gointermod.heatmap.handlers.find_missing_organisms.call(null,counts);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"rows","rows",850049680),final_heatmap_matrix,new cljs.core.Keyword(null,"headers","headers",-835030129),go_terms,new cljs.core.Keyword(null,"max-count","max-count",1539185305),max_count,new cljs.core.Keyword(null,"missing-organisms","missing-organisms",2016893831),missing_organisms,new cljs.core.Keyword(null,"all-results","all-results",1238854783),merged_results], null);
});
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"aggregate-heatmap-results","aggregate-heatmap-results",-1585485743),(function (db,p__26930){
var vec__26931 = p__26930;
var _ = cljs.core.nth.call(null,vec__26931,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__26931,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"heatmap","heatmap",-7865851),gointermod.heatmap.handlers.extract_results.call(null,new cljs.core.Keyword(null,"multi-mine-results","multi-mine-results",1095589949).cljs$core$IFn$_invoke$arity$1(db)));
}));

//# sourceMappingURL=handlers.js.map?rel=1463581199521