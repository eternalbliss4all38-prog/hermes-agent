import { ErrorCodes, GatewayErrorDetailCodes, isMcpAppViewExpiredError, readMissingScopeError, readMissingScopeErrorDetails } from "./gateway-error-details.mjs";
import { $a as AgentsFilesListParamsSchema, $c as SessionsFilesGetResultSchema, $d as WorkerAdmissionHandshakeSchema, $i as TalkSessionSteerParamsSchema, $l as ConnectParamsSchema, $n as errorShape, $o as SkillsUploadCommitParamsSchema, $p as PluginsRefreshParamsSchema, $r as ConfigSchemaParamsSchema, $s as SessionMemberSchema, $t as GatewaySuspendBlockerSchema, $u as BoardWidgetMoveOpSchema, A as TaskSuggestionsDismissParamsSchema, Aa as AuditActivityToolActionV1Schema, Ac as SessionsBranchesSwitchResultSchema, Ad as WorkerInferenceCancelResponseFrameSchema, Ai as TalkCatalogParamsSchema, Al as SessionsSendParamsSchema, An as ExecApprovalsNodeSetParamsSchema, Ao as SkillsProposalEvaluateParamsSchema, Ap as SessionsCatalogHostEventSchema, Ar as SystemAgentSetupAuthStartResultSchema, As as SendParamsSchema, At as NodeInvokeInputEventSchema, Au as BoardPluginActionParamsSchema, B as SessionDiscussionInfoResultSchema, Ba as AgentsWorkspaceGetParamsSchema, Bd as WORKER_HEARTBEAT_INTERVAL_MS, Bf as ApprovalTerminalReasonSchema, Bi as TalkConfigParamsSchema, Bn as EnvironmentsListParamsSchema, Bo as SkillsProposalUpdateParamsSchema, Bp as SessionVisibilitySchema, Br as WizardCancelParamsSchema, Bs as SessionSuggestionStateSchema, Bt as NodePendingAckParamsSchema, Bu as BoardTabsReorderOpSchema, C as TaskSuggestionEventSchema, Ca as AuditListResultSchema, Cc as SessionObserverPlanProgressSchema, Cd as validateSkillsProposalHistoryStatusParams, Cf as WorkerProtocolCloseReasonSchema, Ci as ChannelsPairingListResultSchema, Cl as SessionsResetParamsSchema, Cm as lazyCompile, Cn as DeviceTokenRevokeParamsSchema, Co as SkillsCuratorStatusResultSchema, Cp as SessionCatalogSchema, Cr as SystemAgentChatHistoryTurnSchema, Cs as ConversationTurnCancelParamsSchema, Ct as WebPushSubscribeParamsSchema, Cu as BoardDataReadParamsSchema, D as TaskSuggestionsAcceptResultSchema, Da as AuditActivityListParamsSchema, Dc as SessionsBranchesListParamsSchema, Dd as WORKER_INFERENCE_PROTOCOL_FEATURE, Di as ChannelsStatusResultSchema, Dl as SessionsSearchHitSchema, Dn as ExecApprovalResolveParamsSchema, Do as SkillsProposalActionParamsSchema, Dp as SessionsCatalogArchiveResultSchema, Dr as SystemAgentSetupActivateParamsSchema, Ds as ConversationTurnResultSchema, Dt as NodeDescribeParamsSchema, Du as BoardLegacyEventParamsSchema, E as TaskSuggestionsAcceptParamsSchema, Ea as AuditActivityInboundMessageV1Schema, Ec as SessionsAbortParamsSchema, Ed as WORKER_INFERENCE_METHODS, Ei as ChannelsStatusParamsSchema, El as SessionsRewindResultSchema, Em as parseSessionIcon, En as ExecApprovalRequestParamsSchema, Eo as SkillsInstallParamsSchema, Ep as SessionsCatalogArchiveParamsSchema, Er as SystemAgentChatResultSchema, Es as ConversationTurnReplySchema, Et as WebPushVapidPublicKeyParamsSchema, Eu as BoardGetParamsSchema, F as SystemInfoResultSchema, Fc as SessionsCompactionGetParamsSchema, Fd as validateWorkerInferenceCancelParams, Ff as ApprovalKindSchema, Fi as TalkClientMutationResultSchema, Fn as EnvironmentSummarySchema, Fo as SkillsProposalInspectResultSchema, Fp as SessionCreatedActorSchema, Fr as SystemChangeEntrySchema, Fs as MigrationsMemoryPlanParamsSchema, Ft as NodeListParamsSchema, Fu as BoardTabCreateOpSchema, Ga as AgentSummarySchema, Gc as SessionsCompanionStateParamsSchema, Gd as WORKER_PROTOCOL_MAX_FEATURE_LENGTH, Gf as PendingApprovalSnapshotSchema, Gi as TalkSessionCancelOutputParamsSchema, Gl as ChatMetadataParamsSchema, Gn as WorkerEnvironmentStateSchema, Go as SkillsSecurityVerdictsParamsSchema, Gr as WizardStatusParamsSchema, Gs as SessionSuggestionsResolveParamsSchema, Gt as NodePluginToolDescriptorSchema, Gu as BoardWidgetAppViewResultSchema, H as SessionDiscussionOpenParamsSchema, Ha as AgentsWorkspaceListParamsSchema, Hc as SessionsCompanionAskResultSchema, Hd as WORKER_LIVE_EVENT_PROTOCOL_FEATURE, Hf as DeniedApprovalSnapshotSchema, Hi as TalkEventSchema, Hl as ChatInjectParamsSchema, Hn as EnvironmentsStatusParamsSchema, Ho as SkillsProposalsListResultSchema, Hp as PluginCatalogEntrySchema, Hr as WizardNextResultSchema, Hs as SessionSuggestionsAddResultSchema, Ht as NodePendingDrainResultSchema, Hu as BoardUpdateParamsSchema, Ia as ArtifactsListParamsSchema, Id as validateWorkerInferenceEventFrame, If as ApprovalPresentationSchema, Ii as TalkClientSteerParamsSchema, In as EnvironmentsCreateParamsSchema, Io as SkillsProposalRecordResultSchema, Ip as SessionRowSchema, Ir as SystemChangeKindSchema, Is as SessionSuggestionActionSchema, It as NodePairApproveParamsSchema, Iu as BoardTabDeleteOpSchema, J as SessionsDispatchParamsSchema, Ja as AgentsDeleteParamsSchema, Jc as SessionsDeleteParamsSchema, Jd as WORKER_RPC_SET_VERSION, Jf as PluginApprovalSeveritySchema, Ji as TalkSessionCreateParamsSchema, Jl as ChatStatusEventSchema, Jo as SkillsSkillCardResultSchema, Jp as PluginSearchResultEntrySchema, Jr as ConfigApplyParamsSchema, Js as SessionTypingParamsSchema, Jt as NodePresenceAlivePayloadSchema, Ju as BoardWidgetGrantParamsSchema, K as SessionPlacementSchema, Ka as AgentsCreateParamsSchema, Kc as SessionsCompanionStateResultSchema, Kd as WORKER_PROTOCOL_MAX_METHOD_LENGTH, Ki as TalkSessionCancelTurnParamsSchema, Kl as ChatRunStartupPhaseSchema, Kn as WorkerTunnelStatusSchema, Ko as SkillsSecurityVerdictsResultSchema, Kr as WizardStatusResultSchema, Ks as SessionSuggestionsResolveResultSchema, Kt as NodePluginToolsUpdateParamsSchema, Ku as BoardWidgetContentSchema, L as SessionsViewerPresenceSetParamsSchema, Lc as SessionsCompactionListParamsSchema, Ld as validateWorkerInferenceStartParams, Lf as ApprovalResolveParamsSchema, Li as TalkClientToolCallParamsSchema, Ln as EnvironmentsCreateResultSchema, Lo as SkillsProposalRequestRevisionParamsSchema, Lp as SessionToolOverridesSchema, Lr as SystemChangeSourceSchema, Ls as SessionSuggestionEventSchema, Lt as NodePairListParamsSchema, Lu as BoardTabIdSchema, M as TaskSuggestionsListParamsSchema, Ma as ArtifactsDownloadParamsSchema, Mc as SessionsCompactParamsSchema, Md as WorkerInferenceOptionsSchema, Mf as ApprovalGetResultSchema, Mi as TalkClientCloseParamsSchema, Ml as SessionsCreateParamsSchema, Mn as ExecApprovalsSetParamsSchema, Mo as SkillsProposalEventsListParamsSchema, Mp as SessionsCatalogListResultSchema, Mr as SystemAgentSetupDetectResultSchema, Ms as MAX_MEMORY_MIGRATION_ITEMS, Mt as NodeInvokeProgressParamsSchema, Mu as BoardSetChatDockCommandSchema, N as TaskSuggestionsListResultSchema, Nc as SessionsCompactionBranchParamsSchema, Nd as WorkerInferenceStartRequestFrameSchema, Nf as ApprovalHistoryParamsSchema, Ni as TalkClientCreateParamsSchema, Nl as ChatAbortParamsSchema, No as SkillsProposalEventsListResultSchema, Np as SessionsCatalogReadParamsSchema, Nr as SystemAgentSetupVerifyParamsSchema, Ns as MigrationProtocolSchemas, Nu as BoardSizeSchema, O as TaskSuggestionsCreateParamsSchema, Oa as AuditActivityListResultSchema, Oc as SessionsBranchesListResultSchema, Od as WORKER_PROTOCOL_MAX_INFERENCE_PAYLOAD_BYTES, Of as ApprovalDecisionSchema, Oi as ChannelsStopParamsSchema, Ol as SessionsSearchParamsSchema, On as ExecApprovalsGetParamsSchema, Oo as SkillsProposalApplyResultSchema, Op as SessionsCatalogContinueParamsSchema, Or as SystemAgentSetupActivateResultSchema, Os as MessageActionParamsSchema, Ot as NodeEventParamsSchema, Ou as BoardMcpAppDescriptorSchema, P as SystemInfoParamsSchema, Pa as ArtifactsGetParamsSchema, Pd as WorkerInferenceStartResponseFrameSchema, Pf as ApprovalHistoryResultSchema, Pi as TalkClientCreateResultSchema, Pn as EnvironmentStatusSchema, Po as SkillsProposalInspectParamsSchema, Pp as SessionsCatalogReadResultSchema, Pr as SystemAgentSetupVerifyResultSchema, Ps as MigrationsMemoryApplyParamsSchema, Pt as NodeInvokeResultParamsSchema, Pu as BoardSnapshotSchema, Q as isCloudWorkerPlacementState, Qa as AgentsFilesGetResultSchema, Qc as SessionsFilesGetParamsSchema, Qd as WORKER_TRANSCRIPT_MAX_JSON_DEPTH, Qf as TerminalApprovalSnapshotSchema, Qi as TalkSessionOkResultSchema, Ql as LogsTailResultSchema, Qn as buildMissingScopeErrorDetails, Qo as SkillsUploadChunkParamsSchema, Qp as PluginsListResultSchema, Qr as ConfigSchemaLookupResultSchema, Qs as SessionMemberRemoveParamsSchema, Qt as NodeSkillsUpdateParamsSchema, Qu as BoardWidgetMcpAppPutContentSchema, Ra as AgentsWorkspaceEntrySchema, Rd as validateWorkerInferenceTerminalFrame, Rf as ApprovalResolveResultSchema, Ri as TalkClientToolCallResultSchema, Rn as EnvironmentsDestroyParamsSchema, Ro as SkillsProposalRequestRevisionResultSchema, Rr as SystemChangesListParamsSchema, Rs as SessionSuggestionResolutionSchema, Rt as NodePairRejectParamsSchema, Ru as BoardTabSchema, S as TasksListResultSchema, Sa as AuditListParamsSchema, Sc as SessionObserverHealthSchema, Sd as validateSkillsProposalHistoryScanParams, Sf as WorkerAdmissionFailureReasonSchema, Si as ChannelsPairingListParamsSchema, Sl as SessionsPreviewParamsSchema, So as SkillsCuratorStatusParamsSchema, Sp as SessionCatalogPullRequestSummarySchema, Sr as SystemAgentChatHistoryResultSchema, Ss as ConversationSendResultSchema, St as PushTestResultSchema, Su as BoardCronActionParamsSchema, T as TaskSuggestionSchema, Ta as AuditActivityEventV1Schema, Tc as SessionWorktreeInfoSchema, Td as WORKER_INFERENCE_MAX_OUTPUT_TOKENS, Tf as ApprovalAllowDecisionSchema, Ti as ChannelsStartParamsSchema, Tl as SessionsRewindParamsSchema, Tm as normalizeSessionIconInput, Tn as ExecApprovalGetParamsSchema, To as SkillsDetailResultSchema, Tp as SessionCatalogTranscriptItemSchema, Tr as SystemAgentChatQuestionSchema, Ts as ConversationTurnParamsSchema, Tt as WebPushUnsubscribeParamsSchema, Tu as BoardFocusTabCommandSchema, U as SessionDiscussionOpenResultSchema, Ua as AgentsWorkspaceListResultSchema, Uc as SessionsCompanionResetParamsSchema, Ud as WORKER_PROTOCOL_FEATURES, Uf as ExecApprovalPresentationSchema, Ui as TalkModeParamsSchema, Ul as ChatMessageGetParamsSchema, Un as EnvironmentsStatusResultSchema, Uo as SkillsSearchParamsSchema, Up as PluginCatalogInstallActionSchema, Ur as WizardStartParamsSchema, Us as SessionSuggestionsListParamsSchema, Ut as NodePendingEnqueueParamsSchema, Uu as BoardViewTicketSchema, V as SessionDiscussionInfoSchema, Va as AgentsWorkspaceGetResultSchema, Vc as SessionsCompanionAskParamsSchema, Vd as WORKER_LAUNCH_V2_PROTOCOL_FEATURE, Vf as CancelledApprovalSnapshotSchema, Vi as TalkConfigResultSchema, Vl as ChatHistoryParamsSchema, Vn as EnvironmentsListResultSchema, Vo as SkillsProposalsListParamsSchema, Vr as WizardNextParamsSchema, Vs as SessionSuggestionsAddParamsSchema, Vt as NodePendingDrainParamsSchema, Vu as BoardTicketEventParamsSchema, W as SessionDiscussionStateSchema, Wa as AgentKindSchema, Wc as SessionsCompanionResetResultSchema, Wd as WORKER_PROTOCOL_MAX_FEATURES, Wf as ExpiredApprovalSnapshotSchema, Wi as TalkSessionAppendAudioParamsSchema, Wn as WorkerEnvironmentMetadataSchema, Wo as SkillsSearchResultSchema, Wr as WizardStartResultSchema, Ws as SessionSuggestionsListResultSchema, Wt as NodePendingEnqueueResultSchema, Wu as BoardWidgetAppViewParamsSchema, X as SessionsReclaimParamsSchema, Xa as AgentsFileEntrySchema, Xc as SessionsDiffParamsSchema, Xd as WORKER_TRANSCRIPT_MAX_BATCH_MESSAGES, Xf as SessionApprovalReplaySchema, Xi as TalkSessionJoinParamsSchema, Xl as ChatToolTitlesResultSchema, Xo as SkillsUpdateParamsSchema, Xp as PluginsInstallResultSchema, Xr as ConfigPatchParamsSchema, Xs as SessionMemberAddParamsSchema, Xt as NodeRenameParamsSchema, Xu as BoardWidgetHtmlContentSchema, Y as SessionsDispatchResultSchema, Ya as AgentsDeleteResultSchema, Yc as SessionsDescribeParamsSchema, Yd as WORKER_TRANSCRIPT_COMMIT_PROTOCOL_FEATURE, Yf as SessionApprovalEventSchema, Yi as TalkSessionCreateResultSchema, Yl as ChatToolTitlesParamsSchema, Yn as MissingScopeErrorDetailsSchema, Yo as SkillsStatusParamsSchema, Yp as PluginsInstallParamsSchema, Yr as ConfigGetParamsSchema, Ys as SessionTypingResultSchema, Yt as NodePresenceAliveReasonSchema, Yu as BoardWidgetHeightModeSchema, Z as SessionsReclaimResultSchema, Za as AgentsFilesGetParamsSchema, Zc as SessionsDiffResultSchema, Zd as WORKER_TRANSCRIPT_MAX_CONTENT_PARTS, Zi as TalkSessionJoinResultSchema, Zl as LogsTailParamsSchema, Zn as WizardNotFoundErrorDetailsSchema, Zo as SkillsUploadBeginParamsSchema, Zp as PluginsListParamsSchema, Zr as ConfigSchemaLookupParamsSchema, Zs as SessionMemberMutationResultSchema, Zt as NodeSkillDescriptorSchema, Zu as BoardWidgetMcpAppContentSchema, _ as TasksCancelParamsSchema, _a as UsersSetAvatarParamsSchema, _c as SessionFileKindSchema, _d as UiSidebarCommandSchema, _f as WorkerTranscriptCommitResultSchema, _i as TalkSessionAcknowledgeMarkParamsSchema, _l as SessionsObserverVisibilityParamsSchema, _n as DevicePairRemoveParamsSchema, _o as SkillProposalLifecycleEventSchema, _p as TerminalUploadResultSchema, _r as CronScratchSetParamsSchema, _s as AgentWaitParamsSchema, _t as QuestionSchema, _u as BoardCanvasDocumentSourceSchema, a as WorktreesBranchesResultSchema, aa as TtsSpeakParamsSchema, ac as SessionVisibilitySetParamsSchema, ad as BoardWidgetPutContentSchema, af as WorkerLiveEventErrorDetailsSchema, al as SessionsFilesSetResultSchema, am as PluginsSessionActionResultSchema, an as GatewaySuspendResumeResultSchema, ao as AgentsUpdateParamsSchema, ap as TerminalDataEventSchema, ar as CronGetParamsSchema, at as QuestionGetResultSchema, au as RequestFrameSchema, b as TasksGetResultSchema, ba as UsersSetDisplayNameResultSchema, bc as SessionGroupSchema, bd as SkillsProposalHistoryScanResultSchema, bf as WORKER_PROTOCOL_MAX_IDENTIFIER_LENGTH, bi as ChannelsPairingDismissParamsSchema, bl as SessionsPluginPatchParamsSchema, bo as SkillsCuratorActionParamsSchema, bp as SessionCatalogHostSchema, br as CronUpdateParamsSchema, bs as ConversationListResultSchema, bt as QuestionWaitAnswerResultSchema, bu as BoardCommandEventSchema, c as WorktreesGcResultSchema, ca as WebLoginWaitParamsSchema, cc as SessionBranchSchema, cd as BoardWidgetResizeOpSchema, cf as WorkerLiveEventRequestFrameSchema, cl as SessionsGroupsDeleteParamsSchema, cm as PluginsSetEnabledResultSchema, cn as GatewaySuspendStatusResultSchema, cp as TerminalInputParamsSchema, cr as CronListParamsSchema, cs as ToolsEffectiveParamsSchema, ct as QuestionOptionSchema, cu as TickEventSchema, d as WorktreesRemoveParamsSchema, da as UsersLinkEmailParamsSchema, dc as SessionDiffFileSchema, dd as UiCommandParamsSchema, df as WorkerLiveEventSchema, dl as SessionsGroupsMutationResultSchema, dm as PluginsUninstallParamsSchema, dn as FsDirEntrySchema, do as ModelsListParamsSchema, dp as TerminalOpenResultSchema, ds as ToolsInvokeParamsSchema, dt as QuestionRequestQuestionSchema, du as StateVersionSchema, ea as TalkSessionSubmitToolResultParamsSchema, ec as SessionMembersListParamsSchema, ed as BoardWidgetNameSchema, ef as WorkerAdmissionResponseFrameSchema, ei as ConfigSchemaResponseSchema, el as SessionsFilesListParamsSchema, em as PluginsRefreshResultSchema, en as GatewaySuspendPrepareBusyResultSchema, eo as AgentsFilesListResultSchema, ep as isWellFormedApprovalId, er as missingScopeErrorShape, eu as ErrorShapeSchema, f as WorktreesRemoveResultSchema, fa as UsersLinkEmailResultSchema, fc as SessionDiffFileStatusSchema, fd as UiCommandResultSchema, ff as WorkerTranscriptCommitErrorReasonSchema, fl as SessionsGroupsPutParamsSchema, fm as PluginsUninstallResultSchema, fn as FsListDirParamsSchema, fp as TerminalResizeParamsSchema, fr as CronRunParamsSchema, ft as QuestionRequestResultSchema, fu as BOARD_CRON_JOB_ID_MAX_LENGTH, g as TaskSummarySchema, ga as UsersSelfResultSchema, gc as SessionFileEntrySchema, gd as UiPanelCommandSchema, gf as WorkerTranscriptCommitResponseFrameSchema, gi as CommandsListResultSchema, gl as SessionsMessagesUnsubscribeParamsSchema, gn as DevicePairRejectParamsSchema, go as SkillProposalEvaluationSchema, gp as TerminalUploadParamsSchema, gs as AgentParamsSchema, gt as QuestionResolvedEventSchema, gu as BoardActionParamsSchema, h as PluginApprovalResolveParamsSchema, ha as UsersSelfParamsSchema, hc as SessionFileContentEncodingSchema, hd as UiNavigateCommandSchema, hf as WorkerTranscriptCommitRequestFrameSchema, hi as CommandsListParamsSchema, hl as SessionsMessagesSubscribeParamsSchema, hn as DevicePairListParamsSchema, ho as ModelsProbeTargetResultSchema, hp as TerminalTextResultSchema, hr as CronScratchGetResultSchema, hs as AgentIdentityResultSchema, ht as QuestionResolveResultSchema, hu as BOARD_WIDGET_TOOL_MAX_LENGTH, i as WorktreesBranchesParamsSchema, ia as TalkSpeakResultSchema, ic as SessionSharingIdentitySchema, id as BoardWidgetPresentationSchema, if as WorkerHeartbeatResponseFrameSchema, il as SessionsFilesSetParamsSchema, im as PluginsSessionActionParamsSchema, in as GatewaySuspendResumeParamsSchema, io as AgentsListResultSchema, ip as TerminalCloseParamsSchema, it as QuestionGetParamsSchema, iu as HelloOkSchema, j as TaskSuggestionsDismissResultSchema, ja as ArtifactSummarySchema, jc as SessionsCleanupParamsSchema, jd as WorkerInferenceModelRefSchema, jf as ApprovalGetParamsSchema, ji as TalkCatalogResultSchema, jl as SessionsUsageParamsSchema, jn as ExecApprovalsNodeSnapshotSchema, jo as SkillsProposalEvaluateResultSchema, jp as SessionsCatalogListParamsSchema, jr as SystemAgentSetupDetectParamsSchema, js as WakeParamsSchema, jt as NodeInvokeParamsSchema, ju as BoardPromptAuthorizeParamsSchema, k as TaskSuggestionsCreateResultSchema, ka as AuditActivityOutboundMessageV1Schema, kc as SessionsBranchesSwitchParamsSchema, kd as WorkerInferenceCancelRequestFrameSchema, ki as TalkAgentControlResultSchema, kl as SessionsSearchResultSchema, kn as ExecApprovalsNodeGetParamsSchema, ko as SkillsProposalCreateParamsSchema, kp as SessionsCatalogContinueResultSchema, kr as SystemAgentSetupAuthStartParamsSchema, ks as PollParamsSchema, kt as NodeEventResultSchema, ku as BoardOpSchema, l as WorktreesListParamsSchema, ld as BoardWidgetSchema, lf as WorkerLiveEventResponseFrameSchema, ll as SessionsGroupsListParamsSchema, lm as PluginsUiDescriptorsParamsSchema, ln as GatewaySuspendStatusRunningResultSchema, lo as ModelsAuthLogoutParamsSchema, lp as TerminalListResultSchema, lt as QuestionRecordSchema, lu as PresenceEntrySchema, m as PluginApprovalRequestParamsSchema, ma as UsersListResultSchema, mc as SessionFileBrowserResultSchema, md as UiFocusCommandSchema, mf as WorkerTranscriptCommitParamsSchema, ml as SessionsListParamsSchema, mn as DevicePairApproveParamsSchema, mo as ModelsProbeResultSchema, mp as TerminalTextParamsSchema, mr as CronScratchGetParamsSchema, ms as AgentIdentityParamsSchema, mt as QuestionResolveParamsSchema, mu as BOARD_DATA_BINDING_ID_MAX_LENGTH, n as WorktreeRecordSchema, na as TalkSessionTurnResultSchema, nc as SessionSharingActionSchema, nd as BoardWidgetPluginKindSchema, nf as WorkerHeartbeatParamsSchema, ni as UpdateRunParamsSchema, nl as SessionsFilesRevealParamsSchema, nm as PluginsSearchResultSchema, nn as GatewaySuspendPrepareReadyResultSchema, no as AgentsFilesSetResultSchema, np as TerminalAttachParamsSchema, nr as CronAddResultSchema, nt as SecretsResolveResultSchema, nu as GATEWAY_SERVER_CAPS, o as WorktreesCreateParamsSchema, oa as TtsSpeakResultSchema, oc as SessionVisibilitySetResultSchema, od as BoardWidgetPutParamsSchema, of as WorkerLiveEventErrorShapeSchema, ol as SessionsForkParamsSchema, on as GatewaySuspendStatusParamsSchema, oo as AgentsUpdateResultSchema, op as TerminalEventSchema, or as CronJobSchema, ot as QuestionListParamsSchema, ou as ResponseFrameSchema, p as WorktreesRestoreParamsSchema, pa as UsersListParamsSchema, pc as SessionFileBrowserEntrySchema, pd as UiCommandSchema, pf as WorkerTranscriptCommitErrorShapeSchema, pl as SessionsGroupsRenameParamsSchema, pn as FsListDirResultSchema, po as ModelsProbeParamsSchema, pp as TerminalSessionInfoSchema, pr as CronRunsParamsSchema, ps as AgentEventSchema, pt as QuestionRequestedEventSchema, pu as BOARD_CRON_TRIGGER_PREFIX, q as SessionPlacementStateSchema, qa as AgentsCreateResultSchema, qc as SessionsCreateResultSchema, qd as WORKER_PROTOCOL_METHODS, qf as PluginApprovalPresentationSchema, qi as TalkSessionCloseParamsSchema, ql as ChatSendParamsSchema, qn as GatewayErrorDetailsSchema, qo as SkillsSkillCardParamsSchema, qp as PluginSearchPackageSchema, qr as WizardStepSchema, qs as SessionTypingEventSchema, qt as NodePresenceActivityPayloadSchema, qu as BoardWidgetDeclaredSchema, r as WorktreeRepositoryStatusSchema, ra as TalkSpeakParamsSchema, rc as SessionSharingEventSchema, rd as BoardWidgetPluginPropsSchema, rf as WorkerHeartbeatRequestFrameSchema, ri as UpdateStatusParamsSchema, rl as SessionsFilesRevealResultSchema, rn as GatewaySuspendPrepareResultSchema, ro as AgentsListParamsSchema, rp as TerminalAttachResultSchema, rr as CronDeclarativeAddResultSchema, rs as ToolsCatalogParamsSchema, rt as QuestionAnswersSchema, ru as GatewayFrameSchema, s as WorktreesGcParamsSchema, sa as WebLoginStartParamsSchema, sc as SESSION_OBSERVER_HEALTH_VALUES, sd as BoardWidgetRemoveOpSchema, sf as WorkerLiveEventParamsSchema, sl as SessionsForkResultSchema, sm as PluginsSetEnabledParamsSchema, sn as GatewaySuspendStatusReadyResultSchema, so as AuthProbeStatusSchema, sp as TerminalExitEventSchema, st as QuestionListResultSchema, su as ShutdownEventSchema, t as WorktreeBranchSchema, ta as TalkSessionTurnParamsSchema, tc as SessionMembersListResultSchema, td as BoardWidgetPluginContentSchema, tf as WorkerConnectRequestFrameSchema, ti as ConfigSetParamsSchema, tl as SessionsFilesListResultSchema, tm as PluginsSearchParamsSchema, tn as GatewaySuspendPrepareParamsSchema, to as AgentsFilesSetParamsSchema, tp as TerminalAckResultSchema, tr as CronAddParamsSchema, tt as SecretsResolveParamsSchema, tu as EventFrameSchema, u as WorktreesListResultSchema, ua as UserProfileSchema, uc as SessionCompanionExchangeSchema, ud as UiClosePaneCommandSchema, uf as WorkerLiveEventResultSchema, ul as SessionsGroupsListResultSchema, um as PluginsUiDescriptorsResultSchema, un as GatewaySuspendTaskBlockerSchema, uo as ModelsAuthStatusParamsSchema, up as TerminalOpenParamsSchema, ur as CronRemoveParamsSchema, ut as QuestionRequestParamsSchema, uu as SnapshotSchema, v as TasksCancelResultSchema, va as UsersSetAvatarResultSchema, vc as SessionFilePreviewKindSchema, vd as UiSplitCommandSchema, vf as WorkerTranscriptMessageSchema, vi as ChannelsPairingApproveParamsSchema, vl as SessionsObserverVisibilityResultSchema, vn as DevicePairRenameParamsSchema, vo as SkillsBinsParamsSchema, vp as SessionCatalogCapabilitiesSchema, vr as CronScratchSetResultSchema, vs as ConversationListItemSchema, vt as QuestionStatusSchema, vu as BoardChangedEventSchema, w as TaskSuggestionResolutionSchema, wa as AuditActivityAgentRunV1Schema, wd as WORKER_INFERENCE_MAX_CONTEXT_MESSAGES, wf as AllowedApprovalSnapshotSchema, wi as ChannelsLogoutParamsSchema, wl as SessionsResolveParamsSchema, wm as SESSION_AGENT_ATTENTION_ICON_IDS, wn as DeviceTokenRotateParamsSchema, wo as SkillsDetailParamsSchema, wp as SessionCatalogSessionSchema, wr as SystemAgentChatParamsSchema, ws as ConversationTurnCancelResultSchema, wt as WebPushTestParamsSchema, wu as BoardEventParamsSchema, x as TasksListParamsSchema, xa as AuditEventSchema, xc as SessionObserverDigestSchema, xd as SkillsProposalHistoryStatusParamsSchema, xf as WORKER_PROTOCOL_MAX_PAYLOAD_BYTES, xi as ChannelsPairingDismissResultSchema, xn as DevicePairSetupCodeParamsSchema, xo as SkillsCuratorActionResultSchema, xp as SessionCatalogLocatorSchema, xr as SystemAgentChatHistoryParamsSchema, xs as ConversationSendParamsSchema, xt as PushTestParamsSchema, xu as BoardCommandSchema, y as TasksGetParamsSchema, ya as UsersSetDisplayNameParamsSchema, yc as SessionFileRelevanceSchema, yd as SkillsProposalHistoryScanParamsSchema, yf as WORKER_PROTOCOL_MAX_FRAME_ID_LENGTH, yi as ChannelsPairingApproveResultSchema, yl as SessionsPatchParamsSchema, yp as SessionCatalogDescriptorSchema, yr as CronStatusParamsSchema, ys as ConversationListParamsSchema, yt as QuestionWaitAnswerParamsSchema, yu as BoardChatDockSchema, z as SessionDiscussionInfoParamsSchema, za as AgentsWorkspaceFileSchema, zc as SessionsCompactionRestoreParamsSchema, zd as validateWorkerInferenceTerminalOutcome, zf as ApprovalSnapshotSchema, zi as TalkClientTranscriptParamsSchema, zl as ChatEventSchema, zn as EnvironmentsDestroyResultSchema, zo as SkillsProposalReviseParamsSchema, zp as SessionSharingRoleSchema, zr as SystemChangesListResultSchema, zs as SessionSuggestionSchema, zt as NodePairRemoveParamsSchema, zu as BoardTabUpdateOpSchema } from "./worktrees-DCgQJDZc.mjs";
import { MIN_CLIENT_PROTOCOL_VERSION, MIN_NODE_PROTOCOL_VERSION, MIN_PROBE_PROTOCOL_VERSION, PROTOCOL_VERSION } from "./version.mjs";
//#region src/clawhub-trust-error-details.ts
/** Structured ClawHub trust details carried in gateway error payloads. */
const ClawHubTrustErrorCodes = {
	SECURITY_UNAVAILABLE: "clawhub_security_unavailable",
	RISK_ACKNOWLEDGEMENT_REQUIRED: "clawhub_risk_acknowledgement_required",
	DOWNLOAD_BLOCKED: "clawhub_download_blocked"
};
function normalizeNonEmptyString(value) {
	return typeof value === "string" && value.trim().length > 0 ? value : void 0;
}
function isClawHubTrustErrorCode(value) {
	return value === ClawHubTrustErrorCodes.SECURITY_UNAVAILABLE || value === ClawHubTrustErrorCodes.RISK_ACKNOWLEDGEMENT_REQUIRED || value === ClawHubTrustErrorCodes.DOWNLOAD_BLOCKED;
}
function buildClawHubTrustErrorDetails(params) {
	if (!params.code && !params.version && !params.warning) return;
	return {
		...params.code ? { clawhubTrustCode: params.code } : {},
		...params.version ? { version: params.version } : {},
		...params.warning ? { warning: params.warning } : {}
	};
}
function readClawHubTrustErrorDetails(details) {
	if (!details || typeof details !== "object" || Array.isArray(details)) return;
	const raw = details;
	const code = isClawHubTrustErrorCode(raw.clawhubTrustCode) ? raw.clawhubTrustCode : void 0;
	const version = normalizeNonEmptyString(raw.version);
	const warning = normalizeNonEmptyString(raw.warning);
	if (!code && !version && !warning) return;
	return {
		...code ? { clawhubTrustCode: code } : {},
		...version ? { version } : {},
		...warning ? { warning } : {}
	};
}
//#endregion
//#region src/system-agent-error-details.ts
/** Structured system-agent details carried in gateway error payloads. */
const SystemAgentErrorDetailCodes = {
	INFERENCE_UNAVAILABLE: "system_agent_inference_unavailable",
	SESSION_INVALIDATED: "system_agent_session_invalidated"
};
function buildSystemAgentInferenceUnavailableErrorDetails() {
	return { code: SystemAgentErrorDetailCodes.INFERENCE_UNAVAILABLE };
}
function buildSystemAgentSessionInvalidatedErrorDetails() {
	return { code: SystemAgentErrorDetailCodes.SESSION_INVALIDATED };
}
function readSystemAgentInferenceUnavailableErrorDetails(details) {
	if (!details || typeof details !== "object" || Array.isArray(details)) return;
	const code = details.code;
	return code === SystemAgentErrorDetailCodes.INFERENCE_UNAVAILABLE ? { code } : void 0;
}
function readSystemAgentSessionInvalidatedErrorDetails(details) {
	if (!details || typeof details !== "object" || Array.isArray(details)) return;
	const code = details.code;
	return code === SystemAgentErrorDetailCodes.SESSION_INVALIDATED ? { code } : void 0;
}
//#endregion
//#region src/terminal-validators.ts
const validateTerminalOpenParams = /* @__PURE__ */ lazyCompile(TerminalOpenParamsSchema);
const validateTerminalInputParams = /* @__PURE__ */ lazyCompile(TerminalInputParamsSchema);
const validateTerminalResizeParams = /* @__PURE__ */ lazyCompile(TerminalResizeParamsSchema);
const validateTerminalCloseParams = /* @__PURE__ */ lazyCompile(TerminalCloseParamsSchema);
const validateTerminalAttachParams = /* @__PURE__ */ lazyCompile(TerminalAttachParamsSchema);
const validateTerminalTextParams = /* @__PURE__ */ lazyCompile(TerminalTextParamsSchema);
const validateTerminalUploadParams = /* @__PURE__ */ lazyCompile(TerminalUploadParamsSchema);
const validateTerminalUploadResult = /* @__PURE__ */ lazyCompile(TerminalUploadResultSchema);
//#endregion
//#region src/approval-result-validators.ts
const validateApprovalGetResult = /* @__PURE__ */ lazyCompile(ApprovalGetResultSchema);
const validateApprovalHistoryResult = /* @__PURE__ */ lazyCompile(ApprovalHistoryResultSchema);
const validateApprovalResolveResult = /* @__PURE__ */ lazyCompile(ApprovalResolveResultSchema);
//#endregion
//#region src/validation-errors.ts
function firstStringParam(value) {
	if (typeof value === "string" && value.trim()) return value;
	if (Array.isArray(value)) return value.find((entry) => typeof entry === "string" && entry.trim().length > 0);
}
/** Convert validator errors into compact operator-facing failure text. */
function formatValidationErrors(errors) {
	if (!errors?.length) return "unknown validation error";
	const parts = [];
	for (const err of errors) {
		const keyword = typeof err?.keyword === "string" ? err.keyword : "";
		const instancePath = typeof err?.instancePath === "string" ? err.instancePath : "";
		if (keyword === "additionalProperties") {
			const additionalProperty = firstStringParam(err?.params?.additionalProperty) ?? firstStringParam(err?.params?.additionalProperties);
			if (additionalProperty) {
				const where = instancePath ? `at ${instancePath}` : "at root";
				parts.push(`${where}: unexpected property '${additionalProperty}'`);
				continue;
			}
		}
		if (keyword === "required") {
			const missingProperty = firstStringParam(err?.params?.missingProperty) ?? firstStringParam(err?.params?.requiredProperties);
			if (missingProperty) {
				const where = instancePath ? `at ${instancePath}: ` : "";
				parts.push(`${where}must have required property '${missingProperty}'`);
				continue;
			}
		}
		const failingKeyword = typeof err?.params?.failingKeyword === "string" ? err.params.failingKeyword : "";
		const message = keyword === "then" || keyword === "if" && failingKeyword === "then" ? "must have required conditional properties" : typeof err?.message === "string" && err.message.trim() ? err.message : "validation error";
		const where = instancePath ? `at ${instancePath}: ` : "";
		parts.push(`${where}${message}`);
	}
	const unique = [...new Set(parts.filter((part) => part.trim()))];
	return unique.length > 0 ? unique.join("; ") : "unknown validation error";
}
//#endregion
//#region src/migration-api.ts
const validateMigrationsMemoryPlanParams = /* @__PURE__ */ lazyCompile(MigrationsMemoryPlanParamsSchema);
const validateMigrationsMemoryApplyParams = /* @__PURE__ */ lazyCompile(MigrationsMemoryApplyParamsSchema);
//#endregion
//#region src/validator-registry.ts
const validateCommandsListParams = /* @__PURE__ */ lazyCompile(CommandsListParamsSchema);
const validateConnectParams = /* @__PURE__ */ lazyCompile(ConnectParamsSchema);
const validateWorkerAdmissionHandshake = /* @__PURE__ */ lazyCompile(WorkerAdmissionHandshakeSchema);
const validateWorkerConnectRequestFrame = /* @__PURE__ */ lazyCompile(WorkerConnectRequestFrameSchema);
const validateWorkerHeartbeatParams = /* @__PURE__ */ lazyCompile(WorkerHeartbeatParamsSchema);
function checkWorkerProtocolJson(data) {
	const stack = [{
		depth: 0,
		value: data
	}];
	const seen = /* @__PURE__ */ new WeakSet();
	while (stack.length > 0) {
		const current = stack.pop();
		if (!current) break;
		if (current.depth > 32) return {
			keyword: "maxDepth",
			params: { limit: 32 },
			message: `must not exceed JSON nesting depth 32`
		};
		if (current.value === null || typeof current.value === "string" || typeof current.value === "boolean") continue;
		if (typeof current.value === "number") {
			if (!Number.isFinite(current.value)) return {
				keyword: "finite",
				message: "must contain only finite JSON numbers"
			};
			continue;
		}
		if (typeof current.value !== "object") return {
			keyword: "jsonValue",
			message: "must contain only JSON values"
		};
		if (seen.has(current.value)) return {
			keyword: "acyclic",
			message: "must be an acyclic JSON value"
		};
		seen.add(current.value);
		const values = Array.isArray(current.value) ? current.value : Object.values(current.value);
		for (const value of values) stack.push({
			depth: current.depth + 1,
			value
		});
	}
}
const validateWorkerTranscriptCommitParams = /* @__PURE__ */ lazyCompile(WorkerTranscriptCommitParamsSchema, checkWorkerProtocolJson);
const validateWorkerLiveEventParams = /* @__PURE__ */ lazyCompile(WorkerLiveEventParamsSchema, checkWorkerProtocolJson);
const validateGatewaySuspendPrepareParams = /* @__PURE__ */ lazyCompile(GatewaySuspendPrepareParamsSchema);
const validateGatewaySuspendStatusParams = /* @__PURE__ */ lazyCompile(GatewaySuspendStatusParamsSchema);
const validateGatewaySuspendResumeParams = /* @__PURE__ */ lazyCompile(GatewaySuspendResumeParamsSchema);
const validateRequestFrame = /* @__PURE__ */ lazyCompile(RequestFrameSchema);
const validateMessageActionParams = /* @__PURE__ */ lazyCompile(MessageActionParamsSchema);
const validateSendParams = /* @__PURE__ */ lazyCompile(SendParamsSchema);
const validateConversationListParams = /* @__PURE__ */ lazyCompile(ConversationListParamsSchema);
const validateConversationSendParams = /* @__PURE__ */ lazyCompile(ConversationSendParamsSchema);
const validateConversationTurnCancelParams = /* @__PURE__ */ lazyCompile(ConversationTurnCancelParamsSchema);
const validateConversationTurnParams = /* @__PURE__ */ lazyCompile(ConversationTurnParamsSchema);
const validatePollParams = /* @__PURE__ */ lazyCompile(PollParamsSchema);
const validateAgentParams = /* @__PURE__ */ lazyCompile(AgentParamsSchema);
const validateAuditActivityListParams = /* @__PURE__ */ lazyCompile(AuditActivityListParamsSchema);
const validateAuditListParams = /* @__PURE__ */ lazyCompile(AuditListParamsSchema);
const validateUsersListParams = /* @__PURE__ */ lazyCompile(UsersListParamsSchema);
const validateUsersSelfParams = /* @__PURE__ */ lazyCompile(UsersSelfParamsSchema);
const validateUsersSelfResult = /* @__PURE__ */ lazyCompile(UsersSelfResultSchema);
const validateUsersLinkEmailParams = /* @__PURE__ */ lazyCompile(UsersLinkEmailParamsSchema);
const validateUsersLinkEmailResult = /* @__PURE__ */ lazyCompile(UsersLinkEmailResultSchema);
const validateUsersSetDisplayNameParams = /* @__PURE__ */ lazyCompile(UsersSetDisplayNameParamsSchema);
const validateUsersSetDisplayNameResult = /* @__PURE__ */ lazyCompile(UsersSetDisplayNameResultSchema);
const validateUsersSetAvatarParams = /* @__PURE__ */ lazyCompile(UsersSetAvatarParamsSchema);
const validateUsersSetAvatarResult = /* @__PURE__ */ lazyCompile(UsersSetAvatarResultSchema);
const validateAgentIdentityParams = /* @__PURE__ */ lazyCompile(AgentIdentityParamsSchema);
const validateAgentWaitParams = /* @__PURE__ */ lazyCompile(AgentWaitParamsSchema);
const validateWakeParams = /* @__PURE__ */ lazyCompile(WakeParamsSchema);
const validateAgentsListParams = /* @__PURE__ */ lazyCompile(AgentsListParamsSchema);
const validateWorktreesListParams = /* @__PURE__ */ lazyCompile(WorktreesListParamsSchema);
const validateBoardGetParams = /* @__PURE__ */ lazyCompile(BoardGetParamsSchema);
const validateBoardUpdateParams = /* @__PURE__ */ lazyCompile(BoardUpdateParamsSchema);
const validateBoardWidgetContent = /* @__PURE__ */ lazyCompile(BoardWidgetContentSchema);
const validateBoardWidgetAppViewParams = /* @__PURE__ */ lazyCompile(BoardWidgetAppViewParamsSchema);
const validateBoardWidgetPutParams = /* @__PURE__ */ lazyCompile(BoardWidgetPutParamsSchema);
const validateBoardWidgetGrantParams = /* @__PURE__ */ lazyCompile(BoardWidgetGrantParamsSchema);
const validateBoardEventParams = /* @__PURE__ */ lazyCompile(BoardEventParamsSchema);
const validateBoardPromptAuthorizeParams = /* @__PURE__ */ lazyCompile(BoardPromptAuthorizeParamsSchema);
const validateBoardDataReadParams = /* @__PURE__ */ lazyCompile(BoardDataReadParamsSchema);
const validateBoardActionParams = /* @__PURE__ */ lazyCompile(BoardActionParamsSchema);
const validateWorktreesCreateParams = /* @__PURE__ */ lazyCompile(WorktreesCreateParamsSchema);
const validateWorktreesRemoveParams = /* @__PURE__ */ lazyCompile(WorktreesRemoveParamsSchema);
const validateWorktreesRestoreParams = /* @__PURE__ */ lazyCompile(WorktreesRestoreParamsSchema);
const validateWorktreesGcParams = /* @__PURE__ */ lazyCompile(WorktreesGcParamsSchema);
const validateWorktreesBranchesParams = /* @__PURE__ */ lazyCompile(WorktreesBranchesParamsSchema);
const validateFsListDirParams = /* @__PURE__ */ lazyCompile(FsListDirParamsSchema);
const validateFsListDirResult = /* @__PURE__ */ lazyCompile(FsListDirResultSchema);
const validateAgentsCreateParams = /* @__PURE__ */ lazyCompile(AgentsCreateParamsSchema);
const validateAgentsUpdateParams = /* @__PURE__ */ lazyCompile(AgentsUpdateParamsSchema);
const validateAgentsDeleteParams = /* @__PURE__ */ lazyCompile(AgentsDeleteParamsSchema);
const validateAgentsFilesListParams = /* @__PURE__ */ lazyCompile(AgentsFilesListParamsSchema);
const validateAgentsFilesGetParams = /* @__PURE__ */ lazyCompile(AgentsFilesGetParamsSchema);
const validateAgentsFilesSetParams = /* @__PURE__ */ lazyCompile(AgentsFilesSetParamsSchema);
const validateAgentsWorkspaceListParams = /* @__PURE__ */ lazyCompile(AgentsWorkspaceListParamsSchema);
const validateAgentsWorkspaceGetParams = /* @__PURE__ */ lazyCompile(AgentsWorkspaceGetParamsSchema);
const validateArtifactsListParams = /* @__PURE__ */ lazyCompile(ArtifactsListParamsSchema);
const validateArtifactsGetParams = /* @__PURE__ */ lazyCompile(ArtifactsGetParamsSchema);
const validateArtifactsDownloadParams = /* @__PURE__ */ lazyCompile(ArtifactsDownloadParamsSchema);
const validateNodePairListParams = /* @__PURE__ */ lazyCompile(NodePairListParamsSchema);
const validateNodePairApproveParams = /* @__PURE__ */ lazyCompile(NodePairApproveParamsSchema);
const validateNodePairRejectParams = /* @__PURE__ */ lazyCompile(NodePairRejectParamsSchema);
const validateNodePairRemoveParams = /* @__PURE__ */ lazyCompile(NodePairRemoveParamsSchema);
const validateNodeRenameParams = /* @__PURE__ */ lazyCompile(NodeRenameParamsSchema);
const validateNodeListParams = /* @__PURE__ */ lazyCompile(NodeListParamsSchema);
const validateNodePluginToolsUpdateParams = /* @__PURE__ */ lazyCompile(NodePluginToolsUpdateParamsSchema);
const validateNodeSkillsUpdateParams = /* @__PURE__ */ lazyCompile(NodeSkillsUpdateParamsSchema);
const validateEnvironmentsCreateParams = /* @__PURE__ */ lazyCompile(EnvironmentsCreateParamsSchema);
const validateEnvironmentsDestroyParams = /* @__PURE__ */ lazyCompile(EnvironmentsDestroyParamsSchema);
const validateEnvironmentsListParams = /* @__PURE__ */ lazyCompile(EnvironmentsListParamsSchema);
const validateEnvironmentsStatusParams = /* @__PURE__ */ lazyCompile(EnvironmentsStatusParamsSchema);
const validateSystemInfoParams = /* @__PURE__ */ lazyCompile(SystemInfoParamsSchema);
const validateSystemInfoResult = /* @__PURE__ */ lazyCompile(SystemInfoResultSchema);
const validateNodePendingAckParams = /* @__PURE__ */ lazyCompile(NodePendingAckParamsSchema);
const validateNodeDescribeParams = /* @__PURE__ */ lazyCompile(NodeDescribeParamsSchema);
const validateNodeInvokeParams = /* @__PURE__ */ lazyCompile(NodeInvokeParamsSchema);
const validateNodeInvokeResultParams = /* @__PURE__ */ lazyCompile(NodeInvokeResultParamsSchema);
const validateNodeInvokeProgressParams = /* @__PURE__ */ lazyCompile(NodeInvokeProgressParamsSchema);
const validateNodeEventParams = /* @__PURE__ */ lazyCompile(NodeEventParamsSchema);
const validateNodePresenceActivityPayload = /* @__PURE__ */ lazyCompile(NodePresenceActivityPayloadSchema);
const validateNodePendingDrainParams = /* @__PURE__ */ lazyCompile(NodePendingDrainParamsSchema);
const validateNodePendingEnqueueParams = /* @__PURE__ */ lazyCompile(NodePendingEnqueueParamsSchema);
const validatePushTestParams = /* @__PURE__ */ lazyCompile(PushTestParamsSchema);
const validateWebPushVapidPublicKeyParams = /* @__PURE__ */ lazyCompile(WebPushVapidPublicKeyParamsSchema);
const validateWebPushSubscribeParams = /* @__PURE__ */ lazyCompile(WebPushSubscribeParamsSchema);
const validateWebPushUnsubscribeParams = /* @__PURE__ */ lazyCompile(WebPushUnsubscribeParamsSchema);
const validateWebPushTestParams = /* @__PURE__ */ lazyCompile(WebPushTestParamsSchema);
const validateSecretsResolveParams = /* @__PURE__ */ lazyCompile(SecretsResolveParamsSchema);
const validateSecretsResolveResult = /* @__PURE__ */ lazyCompile(SecretsResolveResultSchema);
const validateSessionsListParams = /* @__PURE__ */ lazyCompile(SessionsListParamsSchema);
const validateSessionsCatalogListParams = /* @__PURE__ */ lazyCompile(SessionsCatalogListParamsSchema);
const validateSessionsCatalogReadParams = /* @__PURE__ */ lazyCompile(SessionsCatalogReadParamsSchema);
const validateSessionsCatalogContinueParams = /* @__PURE__ */ lazyCompile(SessionsCatalogContinueParamsSchema);
const validateSessionsCatalogArchiveParams = /* @__PURE__ */ lazyCompile(SessionsCatalogArchiveParamsSchema);
const validateSessionsSearchParams = /* @__PURE__ */ lazyCompile(SessionsSearchParamsSchema);
const validateSessionsCleanupParams = /* @__PURE__ */ lazyCompile(SessionsCleanupParamsSchema);
const validateSessionsPreviewParams = /* @__PURE__ */ lazyCompile(SessionsPreviewParamsSchema);
const validateSessionsDescribeParams = /* @__PURE__ */ lazyCompile(SessionsDescribeParamsSchema);
const validateSessionsResolveParams = /* @__PURE__ */ lazyCompile(SessionsResolveParamsSchema);
const validateSessionsFilesListParams = /* @__PURE__ */ lazyCompile(SessionsFilesListParamsSchema);
const validateSessionsFilesGetParams = /* @__PURE__ */ lazyCompile(SessionsFilesGetParamsSchema);
const validateSessionsFilesSetParams = /* @__PURE__ */ lazyCompile(SessionsFilesSetParamsSchema);
const validateSessionsFilesRevealParams = /* @__PURE__ */ lazyCompile(SessionsFilesRevealParamsSchema);
const validateSessionsDiffParams = /* @__PURE__ */ lazyCompile(SessionsDiffParamsSchema);
const validateSessionsCompanionAskParams = /* @__PURE__ */ lazyCompile(SessionsCompanionAskParamsSchema);
const validateSessionsCompanionStateParams = /* @__PURE__ */ lazyCompile(SessionsCompanionStateParamsSchema);
const validateSessionsCompanionResetParams = /* @__PURE__ */ lazyCompile(SessionsCompanionResetParamsSchema);
const validateSessionsObserverVisibilityParams = /* @__PURE__ */ lazyCompile(SessionsObserverVisibilityParamsSchema);
const validateSessionVisibilitySetParams = /* @__PURE__ */ lazyCompile(SessionVisibilitySetParamsSchema);
const validateSessionMembersListParams = /* @__PURE__ */ lazyCompile(SessionMembersListParamsSchema);
const validateSessionMemberAddParams = /* @__PURE__ */ lazyCompile(SessionMemberAddParamsSchema);
const validateSessionMemberRemoveParams = /* @__PURE__ */ lazyCompile(SessionMemberRemoveParamsSchema);
const validateSessionSuggestionsAddParams = /* @__PURE__ */ lazyCompile(SessionSuggestionsAddParamsSchema);
const validateSessionSuggestionsListParams = /* @__PURE__ */ lazyCompile(SessionSuggestionsListParamsSchema);
const validateSessionSuggestionsResolveParams = /* @__PURE__ */ lazyCompile(SessionSuggestionsResolveParamsSchema);
const validateSessionTypingParams = /* @__PURE__ */ lazyCompile(SessionTypingParamsSchema);
const validateSessionsCreateParams = /* @__PURE__ */ lazyCompile(SessionsCreateParamsSchema);
const validateSessionsSendParams = /* @__PURE__ */ lazyCompile(SessionsSendParamsSchema);
const validateSessionsDispatchParams = /* @__PURE__ */ lazyCompile(SessionsDispatchParamsSchema);
const validateSessionsReclaimParams = /* @__PURE__ */ lazyCompile(SessionsReclaimParamsSchema);
const validateSessionsMessagesSubscribeParams = /* @__PURE__ */ lazyCompile(SessionsMessagesSubscribeParamsSchema);
const validateSessionsMessagesUnsubscribeParams = /* @__PURE__ */ lazyCompile(SessionsMessagesUnsubscribeParamsSchema);
const validateSessionsViewerPresenceSetParams = /* @__PURE__ */ lazyCompile(SessionsViewerPresenceSetParamsSchema);
const validateSessionsAbortParams = /* @__PURE__ */ lazyCompile(SessionsAbortParamsSchema);
const validateSessionsPatchParams = /* @__PURE__ */ lazyCompile(SessionsPatchParamsSchema);
const validateSessionsPluginPatchParams = /* @__PURE__ */ lazyCompile(SessionsPluginPatchParamsSchema);
const validateSessionsResetParams = /* @__PURE__ */ lazyCompile(SessionsResetParamsSchema);
const validateSessionsDeleteParams = /* @__PURE__ */ lazyCompile(SessionsDeleteParamsSchema);
const validateSessionsGroupsListParams = /* @__PURE__ */ lazyCompile(SessionsGroupsListParamsSchema);
const validateSessionsGroupsListResult = /* @__PURE__ */ lazyCompile(SessionsGroupsListResultSchema);
const validateSessionsGroupsPutParams = /* @__PURE__ */ lazyCompile(SessionsGroupsPutParamsSchema);
const validateSessionsGroupsRenameParams = /* @__PURE__ */ lazyCompile(SessionsGroupsRenameParamsSchema);
const validateSessionsGroupsDeleteParams = /* @__PURE__ */ lazyCompile(SessionsGroupsDeleteParamsSchema);
const validateSessionsGroupsMutationResult = /* @__PURE__ */ lazyCompile(SessionsGroupsMutationResultSchema);
const validateSessionsCompactParams = /* @__PURE__ */ lazyCompile(SessionsCompactParamsSchema);
const validateSessionsCompactionListParams = /* @__PURE__ */ lazyCompile(SessionsCompactionListParamsSchema);
const validateSessionsCompactionGetParams = /* @__PURE__ */ lazyCompile(SessionsCompactionGetParamsSchema);
const validateSessionsCompactionBranchParams = /* @__PURE__ */ lazyCompile(SessionsCompactionBranchParamsSchema);
const validateSessionsCompactionRestoreParams = /* @__PURE__ */ lazyCompile(SessionsCompactionRestoreParamsSchema);
const validateSessionsBranchesListParams = /* @__PURE__ */ lazyCompile(SessionsBranchesListParamsSchema);
const validateSessionsBranchesSwitchParams = /* @__PURE__ */ lazyCompile(SessionsBranchesSwitchParamsSchema);
const validateSessionsRewindParams = /* @__PURE__ */ lazyCompile(SessionsRewindParamsSchema);
const validateSessionsForkParams = /* @__PURE__ */ lazyCompile(SessionsForkParamsSchema);
const validateSessionsUsageParams = /* @__PURE__ */ lazyCompile(SessionsUsageParamsSchema);
const validateSessionDiscussionInfoParams = /* @__PURE__ */ lazyCompile(SessionDiscussionInfoParamsSchema);
const validateSessionDiscussionInfoResult = /* @__PURE__ */ lazyCompile(SessionDiscussionInfoResultSchema);
const validateSessionDiscussionOpenParams = /* @__PURE__ */ lazyCompile(SessionDiscussionOpenParamsSchema);
const validateSessionDiscussionOpenResult = /* @__PURE__ */ lazyCompile(SessionDiscussionOpenResultSchema);
const validateTaskSuggestionsListParams = /* @__PURE__ */ lazyCompile(TaskSuggestionsListParamsSchema);
const validateTaskSuggestionsCreateParams = /* @__PURE__ */ lazyCompile(TaskSuggestionsCreateParamsSchema);
const validateTaskSuggestionsAcceptParams = /* @__PURE__ */ lazyCompile(TaskSuggestionsAcceptParamsSchema);
const validateTaskSuggestionsDismissParams = /* @__PURE__ */ lazyCompile(TaskSuggestionsDismissParamsSchema);
const validateTasksListParams = /* @__PURE__ */ lazyCompile(TasksListParamsSchema);
const validateTasksGetParams = /* @__PURE__ */ lazyCompile(TasksGetParamsSchema);
const validateTasksCancelParams = /* @__PURE__ */ lazyCompile(TasksCancelParamsSchema);
const validateConfigGetParams = /* @__PURE__ */ lazyCompile(ConfigGetParamsSchema);
const validateConfigSetParams = /* @__PURE__ */ lazyCompile(ConfigSetParamsSchema);
const validateConfigApplyParams = /* @__PURE__ */ lazyCompile(ConfigApplyParamsSchema);
const validateConfigPatchParams = /* @__PURE__ */ lazyCompile(ConfigPatchParamsSchema);
const validateConfigSchemaParams = /* @__PURE__ */ lazyCompile(ConfigSchemaParamsSchema);
const validateConfigSchemaLookupParams = /* @__PURE__ */ lazyCompile(ConfigSchemaLookupParamsSchema);
const validateConfigSchemaLookupResult = /* @__PURE__ */ lazyCompile(ConfigSchemaLookupResultSchema);
const validateSystemAgentChatParams = /* @__PURE__ */ lazyCompile(SystemAgentChatParamsSchema);
const validateSystemAgentChatHistoryParams = /* @__PURE__ */ lazyCompile(SystemAgentChatHistoryParamsSchema);
const validateSystemChangesListParams = /* @__PURE__ */ lazyCompile(SystemChangesListParamsSchema);
const validateSystemAgentSetupDetectParams = /* @__PURE__ */ lazyCompile(SystemAgentSetupDetectParamsSchema);
const validateSystemAgentSetupVerifyParams = /* @__PURE__ */ lazyCompile(SystemAgentSetupVerifyParamsSchema);
const validateSystemAgentSetupActivateParams = /* @__PURE__ */ lazyCompile(SystemAgentSetupActivateParamsSchema);
const validateSystemAgentSetupAuthStartParams = /* @__PURE__ */ lazyCompile(SystemAgentSetupAuthStartParamsSchema);
const validateWizardStartParams = /* @__PURE__ */ lazyCompile(WizardStartParamsSchema);
const validateWizardNextParams = /* @__PURE__ */ lazyCompile(WizardNextParamsSchema);
const validateWizardCancelParams = /* @__PURE__ */ lazyCompile(WizardCancelParamsSchema);
const validateWizardStatusParams = /* @__PURE__ */ lazyCompile(WizardStatusParamsSchema);
const validateTalkModeParams = /* @__PURE__ */ lazyCompile(TalkModeParamsSchema);
const validateTalkCatalogParams = /* @__PURE__ */ lazyCompile(TalkCatalogParamsSchema);
const validateTalkConfigParams = /* @__PURE__ */ lazyCompile(TalkConfigParamsSchema);
const validateTalkConfigResult = /* @__PURE__ */ lazyCompile(TalkConfigResultSchema);
const validateTalkClientCreateParams = /* @__PURE__ */ lazyCompile(TalkClientCreateParamsSchema);
const validateTalkClientCreateResult = /* @__PURE__ */ lazyCompile(TalkClientCreateResultSchema);
const validateTalkClientCloseParams = /* @__PURE__ */ lazyCompile(TalkClientCloseParamsSchema);
const validateTalkClientMutationResult = /* @__PURE__ */ lazyCompile(TalkClientMutationResultSchema);
const validateTalkClientToolCallParams = /* @__PURE__ */ lazyCompile(TalkClientToolCallParamsSchema);
const validateTalkClientToolCallResult = /* @__PURE__ */ lazyCompile(TalkClientToolCallResultSchema);
const validateTalkClientTranscriptParams = /* @__PURE__ */ lazyCompile(TalkClientTranscriptParamsSchema);
const validateTalkClientSteerParams = /* @__PURE__ */ lazyCompile(TalkClientSteerParamsSchema);
const validateTalkSessionCreateParams = /* @__PURE__ */ lazyCompile(TalkSessionCreateParamsSchema);
const validateTalkSessionJoinParams = /* @__PURE__ */ lazyCompile(TalkSessionJoinParamsSchema);
const validateTalkSessionAppendAudioParams = /* @__PURE__ */ lazyCompile(TalkSessionAppendAudioParamsSchema);
const validateTalkSessionAcknowledgeMarkParams = /* @__PURE__ */ lazyCompile(TalkSessionAcknowledgeMarkParamsSchema);
const validateTalkSessionTurnParams = /* @__PURE__ */ lazyCompile(TalkSessionTurnParamsSchema);
const validateTalkSessionCancelTurnParams = /* @__PURE__ */ lazyCompile(TalkSessionCancelTurnParamsSchema);
const validateTalkSessionCancelOutputParams = /* @__PURE__ */ lazyCompile(TalkSessionCancelOutputParamsSchema);
const validateTalkSessionSteerParams = /* @__PURE__ */ lazyCompile(TalkSessionSteerParamsSchema);
const validateTalkSessionSubmitToolResultParams = /* @__PURE__ */ lazyCompile(TalkSessionSubmitToolResultParamsSchema);
const validateTalkSessionCloseParams = /* @__PURE__ */ lazyCompile(TalkSessionCloseParamsSchema);
const validateTalkSpeakParams = /* @__PURE__ */ lazyCompile(TalkSpeakParamsSchema);
const validateTtsSpeakParams = /* @__PURE__ */ lazyCompile(TtsSpeakParamsSchema);
const validateChannelsStatusParams = /* @__PURE__ */ lazyCompile(ChannelsStatusParamsSchema);
const validateChannelsPairingListParams = /* @__PURE__ */ lazyCompile(ChannelsPairingListParamsSchema);
const validateChannelsPairingApproveParams = /* @__PURE__ */ lazyCompile(ChannelsPairingApproveParamsSchema);
const validateChannelsPairingDismissParams = /* @__PURE__ */ lazyCompile(ChannelsPairingDismissParamsSchema);
const validateChannelsStartParams = /* @__PURE__ */ lazyCompile(ChannelsStartParamsSchema);
const validateChannelsStopParams = /* @__PURE__ */ lazyCompile(ChannelsStopParamsSchema);
const validateChannelsLogoutParams = /* @__PURE__ */ lazyCompile(ChannelsLogoutParamsSchema);
const validateModelsAuthLogoutParams = /* @__PURE__ */ lazyCompile(ModelsAuthLogoutParamsSchema);
const validateModelsAuthStatusParams = /* @__PURE__ */ lazyCompile(ModelsAuthStatusParamsSchema);
const validateModelsListParams = /* @__PURE__ */ lazyCompile(ModelsListParamsSchema);
const validateSkillsStatusParams = /* @__PURE__ */ lazyCompile(SkillsStatusParamsSchema);
const validateToolsCatalogParams = /* @__PURE__ */ lazyCompile(ToolsCatalogParamsSchema);
const validateToolsEffectiveParams = /* @__PURE__ */ lazyCompile(ToolsEffectiveParamsSchema);
const validateToolsInvokeParams = /* @__PURE__ */ lazyCompile(ToolsInvokeParamsSchema);
const validateSkillsBinsParams = /* @__PURE__ */ lazyCompile(SkillsBinsParamsSchema);
const validateSkillsInstallParams = /* @__PURE__ */ lazyCompile(SkillsInstallParamsSchema);
const validateSkillsUploadBeginParams = /* @__PURE__ */ lazyCompile(SkillsUploadBeginParamsSchema);
const validateSkillsUploadChunkParams = /* @__PURE__ */ lazyCompile(SkillsUploadChunkParamsSchema);
const validateSkillsUploadCommitParams = /* @__PURE__ */ lazyCompile(SkillsUploadCommitParamsSchema);
const validateSkillsUpdateParams = /* @__PURE__ */ lazyCompile(SkillsUpdateParamsSchema);
const validateSkillsSearchParams = /* @__PURE__ */ lazyCompile(SkillsSearchParamsSchema);
const validateSkillsDetailParams = /* @__PURE__ */ lazyCompile(SkillsDetailParamsSchema);
const validateSkillsCuratorStatusParams = /* @__PURE__ */ lazyCompile(SkillsCuratorStatusParamsSchema);
const validateSkillsCuratorActionParams = /* @__PURE__ */ lazyCompile(SkillsCuratorActionParamsSchema);
const validateSkillsProposalsListParams = /* @__PURE__ */ lazyCompile(SkillsProposalsListParamsSchema);
const validateSkillsProposalInspectParams = /* @__PURE__ */ lazyCompile(SkillsProposalInspectParamsSchema);
const validateSkillsProposalCreateParams = /* @__PURE__ */ lazyCompile(SkillsProposalCreateParamsSchema);
const validateSkillsProposalUpdateParams = /* @__PURE__ */ lazyCompile(SkillsProposalUpdateParamsSchema);
const validateSkillsProposalReviseParams = /* @__PURE__ */ lazyCompile(SkillsProposalReviseParamsSchema);
const validateSkillsProposalRequestRevisionParams = /* @__PURE__ */ lazyCompile(SkillsProposalRequestRevisionParamsSchema);
const validateSkillsProposalActionParams = /* @__PURE__ */ lazyCompile(SkillsProposalActionParamsSchema);
const validateSkillsProposalEvaluateParams = /* @__PURE__ */ lazyCompile(SkillsProposalEvaluateParamsSchema);
const validateSkillsProposalEventsListParams = /* @__PURE__ */ lazyCompile(SkillsProposalEventsListParamsSchema);
const validateSkillsSecurityVerdictsParams = /* @__PURE__ */ lazyCompile(SkillsSecurityVerdictsParamsSchema);
const validateSkillsSkillCardParams = /* @__PURE__ */ lazyCompile(SkillsSkillCardParamsSchema);
const validateCronListParams = /* @__PURE__ */ lazyCompile(CronListParamsSchema);
const validateCronStatusParams = /* @__PURE__ */ lazyCompile(CronStatusParamsSchema);
const validateCronGetParams = /* @__PURE__ */ lazyCompile(CronGetParamsSchema);
const validateCronAddParams = /* @__PURE__ */ lazyCompile(CronAddParamsSchema);
const validateCronUpdateParams = /* @__PURE__ */ lazyCompile(CronUpdateParamsSchema);
const validateCronRemoveParams = /* @__PURE__ */ lazyCompile(CronRemoveParamsSchema);
const validateCronRunParams = /* @__PURE__ */ lazyCompile(CronRunParamsSchema);
const validateCronRunsParams = /* @__PURE__ */ lazyCompile(CronRunsParamsSchema);
const validateCronScratchGetParams = /* @__PURE__ */ lazyCompile(CronScratchGetParamsSchema);
const validateCronScratchSetParams = /* @__PURE__ */ lazyCompile(CronScratchSetParamsSchema);
const validateDevicePairListParams = /* @__PURE__ */ lazyCompile(DevicePairListParamsSchema);
const validateDevicePairApproveParams = /* @__PURE__ */ lazyCompile(DevicePairApproveParamsSchema);
const validateDevicePairRejectParams = /* @__PURE__ */ lazyCompile(DevicePairRejectParamsSchema);
const validateDevicePairRemoveParams = /* @__PURE__ */ lazyCompile(DevicePairRemoveParamsSchema);
const validateDevicePairSetupCodeParams = /* @__PURE__ */ lazyCompile(DevicePairSetupCodeParamsSchema);
const validateDevicePairRenameParams = /* @__PURE__ */ lazyCompile(DevicePairRenameParamsSchema);
const validateDeviceTokenRotateParams = /* @__PURE__ */ lazyCompile(DeviceTokenRotateParamsSchema);
const validateDeviceTokenRevokeParams = /* @__PURE__ */ lazyCompile(DeviceTokenRevokeParamsSchema);
const validateApprovalPresentation = /* @__PURE__ */ lazyCompile(ApprovalPresentationSchema);
const validateApprovalGetParams = /* @__PURE__ */ lazyCompile(ApprovalGetParamsSchema);
const validateApprovalHistoryParams = /* @__PURE__ */ lazyCompile(ApprovalHistoryParamsSchema);
const validateApprovalResolveParams = /* @__PURE__ */ lazyCompile(ApprovalResolveParamsSchema);
const validateExecApprovalsGetParams = /* @__PURE__ */ lazyCompile(ExecApprovalsGetParamsSchema);
const validateExecApprovalsSetParams = /* @__PURE__ */ lazyCompile(ExecApprovalsSetParamsSchema);
const validateExecApprovalGetParams = /* @__PURE__ */ lazyCompile(ExecApprovalGetParamsSchema);
const validateExecApprovalRequestParams = /* @__PURE__ */ lazyCompile(ExecApprovalRequestParamsSchema);
const validateExecApprovalResolveParams = /* @__PURE__ */ lazyCompile(ExecApprovalResolveParamsSchema);
const validateQuestionRequestParams = /* @__PURE__ */ lazyCompile(QuestionRequestParamsSchema);
const validateQuestionWaitAnswerParams = /* @__PURE__ */ lazyCompile(QuestionWaitAnswerParamsSchema);
const validateQuestionResolveParams = /* @__PURE__ */ lazyCompile(QuestionResolveParamsSchema);
const validateQuestionGetParams = /* @__PURE__ */ lazyCompile(QuestionGetParamsSchema);
const validateQuestionListParams = /* @__PURE__ */ lazyCompile(QuestionListParamsSchema);
const validatePluginApprovalRequestParams = /* @__PURE__ */ lazyCompile(PluginApprovalRequestParamsSchema);
const validatePluginApprovalResolveParams = /* @__PURE__ */ lazyCompile(PluginApprovalResolveParamsSchema);
const validatePluginsListParams = /* @__PURE__ */ lazyCompile(PluginsListParamsSchema);
const validatePluginsRefreshParams = /* @__PURE__ */ lazyCompile(PluginsRefreshParamsSchema);
const validatePluginsSearchParams = /* @__PURE__ */ lazyCompile(PluginsSearchParamsSchema);
const validatePluginsInstallParams = /* @__PURE__ */ lazyCompile(PluginsInstallParamsSchema);
const validatePluginsSetEnabledParams = /* @__PURE__ */ lazyCompile(PluginsSetEnabledParamsSchema);
const validatePluginsUninstallParams = /* @__PURE__ */ lazyCompile(PluginsUninstallParamsSchema);
const validatePluginsUiDescriptorsParams = /* @__PURE__ */ lazyCompile(PluginsUiDescriptorsParamsSchema);
const validatePluginsUiDescriptorsResult = /* @__PURE__ */ lazyCompile(PluginsUiDescriptorsResultSchema);
const validatePluginsSessionActionParams = /* @__PURE__ */ lazyCompile(PluginsSessionActionParamsSchema);
const validatePluginsSessionActionResult = /* @__PURE__ */ lazyCompile(PluginsSessionActionResultSchema);
const validateExecApprovalsNodeGetParams = /* @__PURE__ */ lazyCompile(ExecApprovalsNodeGetParamsSchema);
const validateExecApprovalsNodeSetParams = /* @__PURE__ */ lazyCompile(ExecApprovalsNodeSetParamsSchema);
const validateExecApprovalsNodeSnapshot = /* @__PURE__ */ lazyCompile(ExecApprovalsNodeSnapshotSchema);
const validateLogsTailParams = /* @__PURE__ */ lazyCompile(LogsTailParamsSchema);
const validateModelsProbeParams = /* @__PURE__ */ lazyCompile(ModelsProbeParamsSchema);
const validateChatHistoryParams = /* @__PURE__ */ lazyCompile(ChatHistoryParamsSchema);
const validateChatMetadataParams = /* @__PURE__ */ lazyCompile(ChatMetadataParamsSchema);
const validateChatMessageGetParams = /* @__PURE__ */ lazyCompile(ChatMessageGetParamsSchema);
const validateChatToolTitlesParams = /* @__PURE__ */ lazyCompile(ChatToolTitlesParamsSchema);
const validateChatSendParams = /* @__PURE__ */ lazyCompile(ChatSendParamsSchema);
const validateChatAbortParams = /* @__PURE__ */ lazyCompile(ChatAbortParamsSchema);
const validateChatInjectParams = /* @__PURE__ */ lazyCompile(ChatInjectParamsSchema);
const validateUpdateStatusParams = /* @__PURE__ */ lazyCompile(UpdateStatusParamsSchema);
const validateUpdateRunParams = /* @__PURE__ */ lazyCompile(UpdateRunParamsSchema);
const validateUiCommandParams = /* @__PURE__ */ lazyCompile(UiCommandParamsSchema);
const validateWebLoginStartParams = /* @__PURE__ */ lazyCompile(WebLoginStartParamsSchema);
const validateWebLoginWaitParams = /* @__PURE__ */ lazyCompile(WebLoginWaitParamsSchema);
//#endregion
export { AgentEventSchema, AgentIdentityParamsSchema, AgentIdentityResultSchema, AgentKindSchema, AgentParamsSchema, AgentSummarySchema, AgentsCreateParamsSchema, AgentsCreateResultSchema, AgentsDeleteParamsSchema, AgentsDeleteResultSchema, AgentsFileEntrySchema, AgentsFilesGetParamsSchema, AgentsFilesGetResultSchema, AgentsFilesListParamsSchema, AgentsFilesListResultSchema, AgentsFilesSetParamsSchema, AgentsFilesSetResultSchema, AgentsListParamsSchema, AgentsListResultSchema, AgentsUpdateParamsSchema, AgentsUpdateResultSchema, AgentsWorkspaceEntrySchema, AgentsWorkspaceFileSchema, AgentsWorkspaceGetParamsSchema, AgentsWorkspaceGetResultSchema, AgentsWorkspaceListParamsSchema, AgentsWorkspaceListResultSchema, AllowedApprovalSnapshotSchema, ApprovalAllowDecisionSchema, ApprovalDecisionSchema, ApprovalGetParamsSchema, ApprovalGetResultSchema, ApprovalHistoryParamsSchema, ApprovalHistoryResultSchema, ApprovalKindSchema, ApprovalPresentationSchema, ApprovalResolveParamsSchema, ApprovalResolveResultSchema, ApprovalSnapshotSchema, ApprovalTerminalReasonSchema, ArtifactSummarySchema, ArtifactsDownloadParamsSchema, ArtifactsGetParamsSchema, ArtifactsListParamsSchema, AuditActivityAgentRunV1Schema, AuditActivityEventV1Schema, AuditActivityInboundMessageV1Schema, AuditActivityListParamsSchema, AuditActivityListResultSchema, AuditActivityOutboundMessageV1Schema, AuditActivityToolActionV1Schema, AuditEventSchema, AuditListParamsSchema, AuditListResultSchema, AuthProbeStatusSchema, BOARD_CRON_JOB_ID_MAX_LENGTH, BOARD_CRON_TRIGGER_PREFIX, BOARD_DATA_BINDING_ID_MAX_LENGTH, BOARD_WIDGET_TOOL_MAX_LENGTH, BoardActionParamsSchema, BoardCanvasDocumentSourceSchema, BoardChangedEventSchema, BoardChatDockSchema, BoardCommandEventSchema, BoardCommandSchema, BoardCronActionParamsSchema, BoardDataReadParamsSchema, BoardEventParamsSchema, BoardFocusTabCommandSchema, BoardGetParamsSchema, BoardLegacyEventParamsSchema, BoardMcpAppDescriptorSchema, BoardOpSchema, BoardPluginActionParamsSchema, BoardPromptAuthorizeParamsSchema, BoardSetChatDockCommandSchema, BoardSizeSchema, BoardSnapshotSchema, BoardTabCreateOpSchema, BoardTabDeleteOpSchema, BoardTabIdSchema, BoardTabSchema, BoardTabUpdateOpSchema, BoardTabsReorderOpSchema, BoardTicketEventParamsSchema, BoardUpdateParamsSchema, BoardViewTicketSchema, BoardWidgetAppViewParamsSchema, BoardWidgetAppViewResultSchema, BoardWidgetContentSchema, BoardWidgetDeclaredSchema, BoardWidgetGrantParamsSchema, BoardWidgetHeightModeSchema, BoardWidgetHtmlContentSchema, BoardWidgetMcpAppContentSchema, BoardWidgetMcpAppPutContentSchema, BoardWidgetMoveOpSchema, BoardWidgetNameSchema, BoardWidgetPluginContentSchema, BoardWidgetPluginKindSchema, BoardWidgetPluginPropsSchema, BoardWidgetPresentationSchema, BoardWidgetPutContentSchema, BoardWidgetPutParamsSchema, BoardWidgetRemoveOpSchema, BoardWidgetResizeOpSchema, BoardWidgetSchema, CancelledApprovalSnapshotSchema, ChannelsLogoutParamsSchema, ChannelsPairingApproveParamsSchema, ChannelsPairingApproveResultSchema, ChannelsPairingDismissParamsSchema, ChannelsPairingDismissResultSchema, ChannelsPairingListParamsSchema, ChannelsPairingListResultSchema, ChannelsStartParamsSchema, ChannelsStatusParamsSchema, ChannelsStatusResultSchema, ChannelsStopParamsSchema, ChatEventSchema, ChatHistoryParamsSchema, ChatInjectParamsSchema, ChatMetadataParamsSchema, ChatRunStartupPhaseSchema, ChatSendParamsSchema, ChatStatusEventSchema, ChatToolTitlesParamsSchema, ChatToolTitlesResultSchema, ClawHubTrustErrorCodes, CommandsListParamsSchema, CommandsListResultSchema, ConfigApplyParamsSchema, ConfigGetParamsSchema, ConfigPatchParamsSchema, ConfigSchemaLookupParamsSchema, ConfigSchemaLookupResultSchema, ConfigSchemaParamsSchema, ConfigSchemaResponseSchema, ConfigSetParamsSchema, ConnectParamsSchema, ConversationListItemSchema, ConversationListParamsSchema, ConversationListResultSchema, ConversationSendParamsSchema, ConversationSendResultSchema, ConversationTurnCancelParamsSchema, ConversationTurnCancelResultSchema, ConversationTurnParamsSchema, ConversationTurnReplySchema, ConversationTurnResultSchema, CronAddParamsSchema, CronAddResultSchema, CronDeclarativeAddResultSchema, CronGetParamsSchema, CronJobSchema, CronListParamsSchema, CronRemoveParamsSchema, CronRunParamsSchema, CronRunsParamsSchema, CronScratchGetParamsSchema, CronScratchGetResultSchema, CronScratchSetParamsSchema, CronScratchSetResultSchema, CronStatusParamsSchema, CronUpdateParamsSchema, DeniedApprovalSnapshotSchema, EnvironmentStatusSchema, EnvironmentSummarySchema, EnvironmentsCreateParamsSchema, EnvironmentsCreateResultSchema, EnvironmentsDestroyParamsSchema, EnvironmentsDestroyResultSchema, EnvironmentsListParamsSchema, EnvironmentsListResultSchema, EnvironmentsStatusParamsSchema, EnvironmentsStatusResultSchema, ErrorCodes, ErrorShapeSchema, EventFrameSchema, ExecApprovalGetParamsSchema, ExecApprovalPresentationSchema, ExecApprovalRequestParamsSchema, ExecApprovalResolveParamsSchema, ExecApprovalsGetParamsSchema, ExecApprovalsSetParamsSchema, ExpiredApprovalSnapshotSchema, FsDirEntrySchema, FsListDirParamsSchema, FsListDirResultSchema, GATEWAY_SERVER_CAPS, GatewayErrorDetailCodes, GatewayErrorDetailsSchema, GatewayFrameSchema, GatewaySuspendBlockerSchema, GatewaySuspendPrepareBusyResultSchema, GatewaySuspendPrepareParamsSchema, GatewaySuspendPrepareReadyResultSchema, GatewaySuspendPrepareResultSchema, GatewaySuspendResumeParamsSchema, GatewaySuspendResumeResultSchema, GatewaySuspendStatusParamsSchema, GatewaySuspendStatusReadyResultSchema, GatewaySuspendStatusResultSchema, GatewaySuspendStatusRunningResultSchema, GatewaySuspendTaskBlockerSchema, HelloOkSchema, LogsTailParamsSchema, LogsTailResultSchema, MAX_MEMORY_MIGRATION_ITEMS, MIN_CLIENT_PROTOCOL_VERSION, MIN_NODE_PROTOCOL_VERSION, MIN_PROBE_PROTOCOL_VERSION, MessageActionParamsSchema, MigrationProtocolSchemas, MigrationsMemoryApplyParamsSchema, MigrationsMemoryPlanParamsSchema, MissingScopeErrorDetailsSchema, ModelsAuthLogoutParamsSchema, ModelsAuthStatusParamsSchema, ModelsListParamsSchema, ModelsProbeParamsSchema, ModelsProbeResultSchema, ModelsProbeTargetResultSchema, NodeEventResultSchema, NodeInvokeInputEventSchema, NodeInvokeParamsSchema, NodeInvokeProgressParamsSchema, NodeListParamsSchema, NodePairApproveParamsSchema, NodePairListParamsSchema, NodePairRejectParamsSchema, NodePairRemoveParamsSchema, NodePendingAckParamsSchema, NodePendingDrainParamsSchema, NodePendingDrainResultSchema, NodePendingEnqueueParamsSchema, NodePendingEnqueueResultSchema, NodePluginToolDescriptorSchema, NodePluginToolsUpdateParamsSchema, NodePresenceActivityPayloadSchema, NodePresenceAlivePayloadSchema, NodePresenceAliveReasonSchema, NodeSkillDescriptorSchema, NodeSkillsUpdateParamsSchema, PROTOCOL_VERSION, PendingApprovalSnapshotSchema, PluginApprovalPresentationSchema, PluginApprovalSeveritySchema, PluginCatalogEntrySchema, PluginCatalogInstallActionSchema, PluginSearchPackageSchema, PluginSearchResultEntrySchema, PluginsInstallParamsSchema, PluginsInstallResultSchema, PluginsListParamsSchema, PluginsListResultSchema, PluginsRefreshParamsSchema, PluginsRefreshResultSchema, PluginsSearchParamsSchema, PluginsSearchResultSchema, PluginsSessionActionParamsSchema, PluginsSessionActionResultSchema, PluginsSetEnabledParamsSchema, PluginsSetEnabledResultSchema, PluginsUiDescriptorsParamsSchema, PluginsUiDescriptorsResultSchema, PluginsUninstallParamsSchema, PluginsUninstallResultSchema, PollParamsSchema, PresenceEntrySchema, PushTestParamsSchema, PushTestResultSchema, QuestionAnswersSchema, QuestionGetParamsSchema, QuestionGetResultSchema, QuestionListParamsSchema, QuestionListResultSchema, QuestionOptionSchema, QuestionRecordSchema, QuestionRequestParamsSchema, QuestionRequestQuestionSchema, QuestionRequestResultSchema, QuestionRequestedEventSchema, QuestionResolveParamsSchema, QuestionResolveResultSchema, QuestionResolvedEventSchema, QuestionSchema, QuestionStatusSchema, QuestionWaitAnswerParamsSchema, QuestionWaitAnswerResultSchema, RequestFrameSchema, ResponseFrameSchema, SESSION_AGENT_ATTENTION_ICON_IDS, SESSION_OBSERVER_HEALTH_VALUES, SendParamsSchema, SessionApprovalEventSchema, SessionApprovalReplaySchema, SessionBranchSchema, SessionCatalogCapabilitiesSchema, SessionCatalogDescriptorSchema, SessionCatalogHostSchema, SessionCatalogLocatorSchema, SessionCatalogPullRequestSummarySchema, SessionCatalogSchema, SessionCatalogSessionSchema, SessionCatalogTranscriptItemSchema, SessionCompanionExchangeSchema, SessionCreatedActorSchema, SessionDiffFileSchema, SessionDiffFileStatusSchema, SessionDiscussionInfoParamsSchema, SessionDiscussionInfoResultSchema, SessionDiscussionInfoSchema, SessionDiscussionOpenParamsSchema, SessionDiscussionOpenResultSchema, SessionDiscussionStateSchema, SessionFileBrowserEntrySchema, SessionFileBrowserResultSchema, SessionFileContentEncodingSchema, SessionFileEntrySchema, SessionFileKindSchema, SessionFilePreviewKindSchema, SessionFileRelevanceSchema, SessionGroupSchema, SessionMemberAddParamsSchema, SessionMemberMutationResultSchema, SessionMemberRemoveParamsSchema, SessionMemberSchema, SessionMembersListParamsSchema, SessionMembersListResultSchema, SessionObserverDigestSchema, SessionObserverHealthSchema, SessionObserverPlanProgressSchema, SessionPlacementSchema, SessionPlacementStateSchema, SessionRowSchema, SessionSharingActionSchema, SessionSharingEventSchema, SessionSharingIdentitySchema, SessionSharingRoleSchema, SessionSuggestionActionSchema, SessionSuggestionEventSchema, SessionSuggestionResolutionSchema, SessionSuggestionSchema, SessionSuggestionStateSchema, SessionSuggestionsAddParamsSchema, SessionSuggestionsAddResultSchema, SessionSuggestionsListParamsSchema, SessionSuggestionsListResultSchema, SessionSuggestionsResolveParamsSchema, SessionSuggestionsResolveResultSchema, SessionToolOverridesSchema, SessionTypingEventSchema, SessionTypingParamsSchema, SessionTypingResultSchema, SessionVisibilitySchema, SessionVisibilitySetParamsSchema, SessionVisibilitySetResultSchema, SessionWorktreeInfoSchema, SessionsAbortParamsSchema, SessionsBranchesListParamsSchema, SessionsBranchesListResultSchema, SessionsBranchesSwitchParamsSchema, SessionsBranchesSwitchResultSchema, SessionsCatalogArchiveParamsSchema, SessionsCatalogArchiveResultSchema, SessionsCatalogContinueParamsSchema, SessionsCatalogContinueResultSchema, SessionsCatalogHostEventSchema, SessionsCatalogListParamsSchema, SessionsCatalogListResultSchema, SessionsCatalogReadParamsSchema, SessionsCatalogReadResultSchema, SessionsCleanupParamsSchema, SessionsCompactParamsSchema, SessionsCompactionBranchParamsSchema, SessionsCompactionGetParamsSchema, SessionsCompactionListParamsSchema, SessionsCompactionRestoreParamsSchema, SessionsCompanionAskParamsSchema, SessionsCompanionAskResultSchema, SessionsCompanionResetParamsSchema, SessionsCompanionResetResultSchema, SessionsCompanionStateParamsSchema, SessionsCompanionStateResultSchema, SessionsCreateParamsSchema, SessionsCreateResultSchema, SessionsDeleteParamsSchema, SessionsDescribeParamsSchema, SessionsDiffParamsSchema, SessionsDiffResultSchema, SessionsDispatchParamsSchema, SessionsDispatchResultSchema, SessionsFilesGetParamsSchema, SessionsFilesGetResultSchema, SessionsFilesListParamsSchema, SessionsFilesListResultSchema, SessionsFilesRevealParamsSchema, SessionsFilesRevealResultSchema, SessionsFilesSetParamsSchema, SessionsFilesSetResultSchema, SessionsForkParamsSchema, SessionsForkResultSchema, SessionsGroupsDeleteParamsSchema, SessionsGroupsListParamsSchema, SessionsGroupsListResultSchema, SessionsGroupsMutationResultSchema, SessionsGroupsPutParamsSchema, SessionsGroupsRenameParamsSchema, SessionsListParamsSchema, SessionsObserverVisibilityParamsSchema, SessionsObserverVisibilityResultSchema, SessionsPatchParamsSchema, SessionsPluginPatchParamsSchema, SessionsPreviewParamsSchema, SessionsReclaimParamsSchema, SessionsReclaimResultSchema, SessionsResetParamsSchema, SessionsResolveParamsSchema, SessionsRewindParamsSchema, SessionsRewindResultSchema, SessionsSearchHitSchema, SessionsSearchParamsSchema, SessionsSearchResultSchema, SessionsSendParamsSchema, SessionsUsageParamsSchema, ShutdownEventSchema, SkillProposalEvaluationSchema, SkillProposalLifecycleEventSchema, SkillsCuratorActionParamsSchema, SkillsCuratorActionResultSchema, SkillsCuratorStatusParamsSchema, SkillsCuratorStatusResultSchema, SkillsDetailParamsSchema, SkillsDetailResultSchema, SkillsInstallParamsSchema, SkillsProposalActionParamsSchema, SkillsProposalApplyResultSchema, SkillsProposalCreateParamsSchema, SkillsProposalEvaluateParamsSchema, SkillsProposalEvaluateResultSchema, SkillsProposalEventsListParamsSchema, SkillsProposalEventsListResultSchema, SkillsProposalHistoryScanParamsSchema, SkillsProposalHistoryScanResultSchema, SkillsProposalHistoryStatusParamsSchema, SkillsProposalInspectParamsSchema, SkillsProposalInspectResultSchema, SkillsProposalRecordResultSchema, SkillsProposalRequestRevisionParamsSchema, SkillsProposalRequestRevisionResultSchema, SkillsProposalReviseParamsSchema, SkillsProposalUpdateParamsSchema, SkillsProposalsListParamsSchema, SkillsProposalsListResultSchema, SkillsSearchParamsSchema, SkillsSearchResultSchema, SkillsSecurityVerdictsParamsSchema, SkillsSecurityVerdictsResultSchema, SkillsSkillCardParamsSchema, SkillsSkillCardResultSchema, SkillsStatusParamsSchema, SkillsUpdateParamsSchema, SkillsUploadBeginParamsSchema, SkillsUploadChunkParamsSchema, SkillsUploadCommitParamsSchema, SnapshotSchema, StateVersionSchema, SystemAgentChatHistoryParamsSchema, SystemAgentChatHistoryResultSchema, SystemAgentChatHistoryTurnSchema, SystemAgentChatParamsSchema, SystemAgentChatQuestionSchema, SystemAgentChatResultSchema, SystemAgentErrorDetailCodes, SystemAgentSetupActivateParamsSchema, SystemAgentSetupActivateResultSchema, SystemAgentSetupAuthStartParamsSchema, SystemAgentSetupAuthStartResultSchema, SystemAgentSetupDetectParamsSchema, SystemAgentSetupDetectResultSchema, SystemAgentSetupVerifyParamsSchema, SystemAgentSetupVerifyResultSchema, SystemChangeEntrySchema, SystemChangeKindSchema, SystemChangeSourceSchema, SystemChangesListParamsSchema, SystemChangesListResultSchema, SystemInfoParamsSchema, SystemInfoResultSchema, TalkAgentControlResultSchema, TalkCatalogParamsSchema, TalkCatalogResultSchema, TalkClientCloseParamsSchema, TalkClientCreateParamsSchema, TalkClientCreateResultSchema, TalkClientMutationResultSchema, TalkClientSteerParamsSchema, TalkClientToolCallParamsSchema, TalkClientToolCallResultSchema, TalkClientTranscriptParamsSchema, TalkConfigParamsSchema, TalkConfigResultSchema, TalkEventSchema, TalkSessionAcknowledgeMarkParamsSchema, TalkSessionAppendAudioParamsSchema, TalkSessionCancelOutputParamsSchema, TalkSessionCancelTurnParamsSchema, TalkSessionCloseParamsSchema, TalkSessionCreateParamsSchema, TalkSessionCreateResultSchema, TalkSessionJoinParamsSchema, TalkSessionJoinResultSchema, TalkSessionOkResultSchema, TalkSessionSteerParamsSchema, TalkSessionSubmitToolResultParamsSchema, TalkSessionTurnParamsSchema, TalkSessionTurnResultSchema, TalkSpeakParamsSchema, TalkSpeakResultSchema, TaskSuggestionEventSchema, TaskSuggestionResolutionSchema, TaskSuggestionSchema, TaskSuggestionsAcceptParamsSchema, TaskSuggestionsAcceptResultSchema, TaskSuggestionsCreateParamsSchema, TaskSuggestionsCreateResultSchema, TaskSuggestionsDismissParamsSchema, TaskSuggestionsDismissResultSchema, TaskSuggestionsListParamsSchema, TaskSuggestionsListResultSchema, TaskSummarySchema, TasksCancelParamsSchema, TasksCancelResultSchema, TasksGetParamsSchema, TasksGetResultSchema, TasksListParamsSchema, TasksListResultSchema, TerminalAckResultSchema, TerminalApprovalSnapshotSchema, TerminalAttachParamsSchema, TerminalAttachResultSchema, TerminalCloseParamsSchema, TerminalDataEventSchema, TerminalEventSchema, TerminalExitEventSchema, TerminalInputParamsSchema, TerminalListResultSchema, TerminalOpenParamsSchema, TerminalOpenResultSchema, TerminalResizeParamsSchema, TerminalSessionInfoSchema, TerminalTextParamsSchema, TerminalTextResultSchema, TerminalUploadParamsSchema, TerminalUploadResultSchema, TickEventSchema, ToolsCatalogParamsSchema, ToolsEffectiveParamsSchema, ToolsInvokeParamsSchema, TtsSpeakParamsSchema, TtsSpeakResultSchema, UiClosePaneCommandSchema, UiCommandParamsSchema, UiCommandResultSchema, UiCommandSchema, UiFocusCommandSchema, UiNavigateCommandSchema, UiPanelCommandSchema, UiSidebarCommandSchema, UiSplitCommandSchema, UpdateRunParamsSchema, UpdateStatusParamsSchema, UserProfileSchema, UsersLinkEmailParamsSchema, UsersLinkEmailResultSchema, UsersListParamsSchema, UsersListResultSchema, UsersSelfParamsSchema, UsersSelfResultSchema, UsersSetAvatarParamsSchema, UsersSetAvatarResultSchema, UsersSetDisplayNameParamsSchema, UsersSetDisplayNameResultSchema, WORKER_HEARTBEAT_INTERVAL_MS, WORKER_INFERENCE_MAX_CONTEXT_MESSAGES, WORKER_INFERENCE_MAX_OUTPUT_TOKENS, WORKER_INFERENCE_METHODS, WORKER_INFERENCE_PROTOCOL_FEATURE, WORKER_LAUNCH_V2_PROTOCOL_FEATURE, WORKER_LIVE_EVENT_PROTOCOL_FEATURE, WORKER_PROTOCOL_FEATURES, WORKER_PROTOCOL_MAX_FEATURES, WORKER_PROTOCOL_MAX_FEATURE_LENGTH, WORKER_PROTOCOL_MAX_FRAME_ID_LENGTH, WORKER_PROTOCOL_MAX_IDENTIFIER_LENGTH, WORKER_PROTOCOL_MAX_INFERENCE_PAYLOAD_BYTES, WORKER_PROTOCOL_MAX_METHOD_LENGTH, WORKER_PROTOCOL_MAX_PAYLOAD_BYTES, WORKER_PROTOCOL_METHODS, WORKER_RPC_SET_VERSION, WORKER_TRANSCRIPT_COMMIT_PROTOCOL_FEATURE, WORKER_TRANSCRIPT_MAX_BATCH_MESSAGES, WORKER_TRANSCRIPT_MAX_CONTENT_PARTS, WORKER_TRANSCRIPT_MAX_JSON_DEPTH, WakeParamsSchema, WebLoginStartParamsSchema, WebLoginWaitParamsSchema, WebPushSubscribeParamsSchema, WebPushTestParamsSchema, WebPushUnsubscribeParamsSchema, WebPushVapidPublicKeyParamsSchema, WizardCancelParamsSchema, WizardNextParamsSchema, WizardNextResultSchema, WizardNotFoundErrorDetailsSchema, WizardStartParamsSchema, WizardStartResultSchema, WizardStatusParamsSchema, WizardStatusResultSchema, WizardStepSchema, WorkerAdmissionFailureReasonSchema, WorkerAdmissionHandshakeSchema, WorkerAdmissionResponseFrameSchema, WorkerConnectRequestFrameSchema, WorkerEnvironmentMetadataSchema, WorkerEnvironmentStateSchema, WorkerHeartbeatParamsSchema, WorkerHeartbeatRequestFrameSchema, WorkerHeartbeatResponseFrameSchema, WorkerInferenceCancelRequestFrameSchema, WorkerInferenceCancelResponseFrameSchema, WorkerInferenceModelRefSchema, WorkerInferenceOptionsSchema, WorkerInferenceStartRequestFrameSchema, WorkerInferenceStartResponseFrameSchema, WorkerLiveEventErrorDetailsSchema, WorkerLiveEventErrorShapeSchema, WorkerLiveEventParamsSchema, WorkerLiveEventRequestFrameSchema, WorkerLiveEventResponseFrameSchema, WorkerLiveEventResultSchema, WorkerLiveEventSchema, WorkerProtocolCloseReasonSchema, WorkerTranscriptCommitErrorReasonSchema, WorkerTranscriptCommitErrorShapeSchema, WorkerTranscriptCommitParamsSchema, WorkerTranscriptCommitRequestFrameSchema, WorkerTranscriptCommitResponseFrameSchema, WorkerTranscriptCommitResultSchema, WorkerTranscriptMessageSchema, WorkerTunnelStatusSchema, WorktreeBranchSchema, WorktreeRecordSchema, WorktreeRepositoryStatusSchema, WorktreesBranchesParamsSchema, WorktreesBranchesResultSchema, WorktreesCreateParamsSchema, WorktreesGcParamsSchema, WorktreesGcResultSchema, WorktreesListParamsSchema, WorktreesListResultSchema, WorktreesRemoveParamsSchema, WorktreesRemoveResultSchema, WorktreesRestoreParamsSchema, buildClawHubTrustErrorDetails, buildMissingScopeErrorDetails, buildSystemAgentInferenceUnavailableErrorDetails, buildSystemAgentSessionInvalidatedErrorDetails, errorShape, formatValidationErrors, isClawHubTrustErrorCode, isCloudWorkerPlacementState, isMcpAppViewExpiredError, isWellFormedApprovalId, missingScopeErrorShape, normalizeSessionIconInput, parseSessionIcon, readClawHubTrustErrorDetails, readMissingScopeError, readMissingScopeErrorDetails, readSystemAgentInferenceUnavailableErrorDetails, readSystemAgentSessionInvalidatedErrorDetails, validateAgentIdentityParams, validateAgentParams, validateAgentWaitParams, validateAgentsCreateParams, validateAgentsDeleteParams, validateAgentsFilesGetParams, validateAgentsFilesListParams, validateAgentsFilesSetParams, validateAgentsListParams, validateAgentsUpdateParams, validateAgentsWorkspaceGetParams, validateAgentsWorkspaceListParams, validateApprovalGetParams, validateApprovalGetResult, validateApprovalHistoryParams, validateApprovalHistoryResult, validateApprovalPresentation, validateApprovalResolveParams, validateApprovalResolveResult, validateArtifactsDownloadParams, validateArtifactsGetParams, validateArtifactsListParams, validateAuditActivityListParams, validateAuditListParams, validateBoardActionParams, validateBoardDataReadParams, validateBoardEventParams, validateBoardGetParams, validateBoardPromptAuthorizeParams, validateBoardUpdateParams, validateBoardWidgetAppViewParams, validateBoardWidgetContent, validateBoardWidgetGrantParams, validateBoardWidgetPutParams, validateChannelsLogoutParams, validateChannelsPairingApproveParams, validateChannelsPairingDismissParams, validateChannelsPairingListParams, validateChannelsStartParams, validateChannelsStatusParams, validateChannelsStopParams, validateChatAbortParams, validateChatHistoryParams, validateChatInjectParams, validateChatMessageGetParams, validateChatMetadataParams, validateChatSendParams, validateChatToolTitlesParams, validateCommandsListParams, validateConfigApplyParams, validateConfigGetParams, validateConfigPatchParams, validateConfigSchemaLookupParams, validateConfigSchemaLookupResult, validateConfigSchemaParams, validateConfigSetParams, validateConnectParams, validateConversationListParams, validateConversationSendParams, validateConversationTurnCancelParams, validateConversationTurnParams, validateCronAddParams, validateCronGetParams, validateCronListParams, validateCronRemoveParams, validateCronRunParams, validateCronRunsParams, validateCronScratchGetParams, validateCronScratchSetParams, validateCronStatusParams, validateCronUpdateParams, validateDevicePairApproveParams, validateDevicePairListParams, validateDevicePairRejectParams, validateDevicePairRemoveParams, validateDevicePairRenameParams, validateDevicePairSetupCodeParams, validateDeviceTokenRevokeParams, validateDeviceTokenRotateParams, validateEnvironmentsCreateParams, validateEnvironmentsDestroyParams, validateEnvironmentsListParams, validateEnvironmentsStatusParams, validateExecApprovalGetParams, validateExecApprovalRequestParams, validateExecApprovalResolveParams, validateExecApprovalsGetParams, validateExecApprovalsNodeGetParams, validateExecApprovalsNodeSetParams, validateExecApprovalsNodeSnapshot, validateExecApprovalsSetParams, validateFsListDirParams, validateFsListDirResult, validateGatewaySuspendPrepareParams, validateGatewaySuspendResumeParams, validateGatewaySuspendStatusParams, validateLogsTailParams, validateMessageActionParams, validateMigrationsMemoryApplyParams, validateMigrationsMemoryPlanParams, validateModelsAuthLogoutParams, validateModelsAuthStatusParams, validateModelsListParams, validateModelsProbeParams, validateNodeDescribeParams, validateNodeEventParams, validateNodeInvokeParams, validateNodeInvokeProgressParams, validateNodeInvokeResultParams, validateNodeListParams, validateNodePairApproveParams, validateNodePairListParams, validateNodePairRejectParams, validateNodePairRemoveParams, validateNodePendingAckParams, validateNodePendingDrainParams, validateNodePendingEnqueueParams, validateNodePluginToolsUpdateParams, validateNodePresenceActivityPayload, validateNodeRenameParams, validateNodeSkillsUpdateParams, validatePluginApprovalRequestParams, validatePluginApprovalResolveParams, validatePluginsInstallParams, validatePluginsListParams, validatePluginsRefreshParams, validatePluginsSearchParams, validatePluginsSessionActionParams, validatePluginsSessionActionResult, validatePluginsSetEnabledParams, validatePluginsUiDescriptorsParams, validatePluginsUiDescriptorsResult, validatePluginsUninstallParams, validatePollParams, validatePushTestParams, validateQuestionGetParams, validateQuestionListParams, validateQuestionRequestParams, validateQuestionResolveParams, validateQuestionWaitAnswerParams, validateRequestFrame, validateSecretsResolveParams, validateSecretsResolveResult, validateSendParams, validateSessionDiscussionInfoParams, validateSessionDiscussionInfoResult, validateSessionDiscussionOpenParams, validateSessionDiscussionOpenResult, validateSessionMemberAddParams, validateSessionMemberRemoveParams, validateSessionMembersListParams, validateSessionSuggestionsAddParams, validateSessionSuggestionsListParams, validateSessionSuggestionsResolveParams, validateSessionTypingParams, validateSessionVisibilitySetParams, validateSessionsAbortParams, validateSessionsBranchesListParams, validateSessionsBranchesSwitchParams, validateSessionsCatalogArchiveParams, validateSessionsCatalogContinueParams, validateSessionsCatalogListParams, validateSessionsCatalogReadParams, validateSessionsCleanupParams, validateSessionsCompactParams, validateSessionsCompactionBranchParams, validateSessionsCompactionGetParams, validateSessionsCompactionListParams, validateSessionsCompactionRestoreParams, validateSessionsCompanionAskParams, validateSessionsCompanionResetParams, validateSessionsCompanionStateParams, validateSessionsCreateParams, validateSessionsDeleteParams, validateSessionsDescribeParams, validateSessionsDiffParams, validateSessionsDispatchParams, validateSessionsFilesGetParams, validateSessionsFilesListParams, validateSessionsFilesRevealParams, validateSessionsFilesSetParams, validateSessionsForkParams, validateSessionsGroupsDeleteParams, validateSessionsGroupsListParams, validateSessionsGroupsListResult, validateSessionsGroupsMutationResult, validateSessionsGroupsPutParams, validateSessionsGroupsRenameParams, validateSessionsListParams, validateSessionsMessagesSubscribeParams, validateSessionsMessagesUnsubscribeParams, validateSessionsObserverVisibilityParams, validateSessionsPatchParams, validateSessionsPluginPatchParams, validateSessionsPreviewParams, validateSessionsReclaimParams, validateSessionsResetParams, validateSessionsResolveParams, validateSessionsRewindParams, validateSessionsSearchParams, validateSessionsSendParams, validateSessionsUsageParams, validateSessionsViewerPresenceSetParams, validateSkillsBinsParams, validateSkillsCuratorActionParams, validateSkillsCuratorStatusParams, validateSkillsDetailParams, validateSkillsInstallParams, validateSkillsProposalActionParams, validateSkillsProposalCreateParams, validateSkillsProposalEvaluateParams, validateSkillsProposalEventsListParams, validateSkillsProposalHistoryScanParams, validateSkillsProposalHistoryStatusParams, validateSkillsProposalInspectParams, validateSkillsProposalRequestRevisionParams, validateSkillsProposalReviseParams, validateSkillsProposalUpdateParams, validateSkillsProposalsListParams, validateSkillsSearchParams, validateSkillsSecurityVerdictsParams, validateSkillsSkillCardParams, validateSkillsStatusParams, validateSkillsUpdateParams, validateSkillsUploadBeginParams, validateSkillsUploadChunkParams, validateSkillsUploadCommitParams, validateSystemAgentChatHistoryParams, validateSystemAgentChatParams, validateSystemAgentSetupActivateParams, validateSystemAgentSetupAuthStartParams, validateSystemAgentSetupDetectParams, validateSystemAgentSetupVerifyParams, validateSystemChangesListParams, validateSystemInfoParams, validateSystemInfoResult, validateTalkCatalogParams, validateTalkClientCloseParams, validateTalkClientCreateParams, validateTalkClientCreateResult, validateTalkClientMutationResult, validateTalkClientSteerParams, validateTalkClientToolCallParams, validateTalkClientToolCallResult, validateTalkClientTranscriptParams, validateTalkConfigParams, validateTalkConfigResult, validateTalkModeParams, validateTalkSessionAcknowledgeMarkParams, validateTalkSessionAppendAudioParams, validateTalkSessionCancelOutputParams, validateTalkSessionCancelTurnParams, validateTalkSessionCloseParams, validateTalkSessionCreateParams, validateTalkSessionJoinParams, validateTalkSessionSteerParams, validateTalkSessionSubmitToolResultParams, validateTalkSessionTurnParams, validateTalkSpeakParams, validateTaskSuggestionsAcceptParams, validateTaskSuggestionsCreateParams, validateTaskSuggestionsDismissParams, validateTaskSuggestionsListParams, validateTasksCancelParams, validateTasksGetParams, validateTasksListParams, validateTerminalAttachParams, validateTerminalCloseParams, validateTerminalInputParams, validateTerminalOpenParams, validateTerminalResizeParams, validateTerminalTextParams, validateTerminalUploadParams, validateTerminalUploadResult, validateToolsCatalogParams, validateToolsEffectiveParams, validateToolsInvokeParams, validateTtsSpeakParams, validateUiCommandParams, validateUpdateRunParams, validateUpdateStatusParams, validateUsersLinkEmailParams, validateUsersLinkEmailResult, validateUsersListParams, validateUsersSelfParams, validateUsersSelfResult, validateUsersSetAvatarParams, validateUsersSetAvatarResult, validateUsersSetDisplayNameParams, validateUsersSetDisplayNameResult, validateWakeParams, validateWebLoginStartParams, validateWebLoginWaitParams, validateWebPushSubscribeParams, validateWebPushTestParams, validateWebPushUnsubscribeParams, validateWebPushVapidPublicKeyParams, validateWizardCancelParams, validateWizardNextParams, validateWizardStartParams, validateWizardStatusParams, validateWorkerAdmissionHandshake, validateWorkerConnectRequestFrame, validateWorkerHeartbeatParams, validateWorkerInferenceCancelParams, validateWorkerInferenceEventFrame, validateWorkerInferenceStartParams, validateWorkerInferenceTerminalFrame, validateWorkerInferenceTerminalOutcome, validateWorkerLiveEventParams, validateWorkerTranscriptCommitParams, validateWorktreesBranchesParams, validateWorktreesCreateParams, validateWorktreesGcParams, validateWorktreesListParams, validateWorktreesRemoveParams, validateWorktreesRestoreParams };
